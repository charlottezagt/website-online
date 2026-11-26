(function () {
  const P = window.PROJECTS || [];
  const page = document.body.dataset.page;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const url = (p, n) => `project.html?p=${p.slug}${n ? "#" + n : ""}`;
  const pad = (n) => String(n).padStart(2, "0");

  /* "01:1279x1600" or "video:rain-1:3x4" */
  function parseMedia(slug, m) {
    const parts = m.split(":");
    const isVideo = parts[0] === "video";
    const name = isVideo ? parts[1] : parts[0];
    const [w, h] = (isVideo ? parts[2] : parts[1]).split("x").map(Number);
    const flag = parts[isVideo ? 3 : 2] || "";   // "obj" = scanned object with space around it, "sm" = shown a bit smaller (slides), "phone" = rounded phone screen
    return isVideo
      ? { type: "video", src: `assets/video/${name}.mp4`, poster: `assets/video/${name}.jpg`, w, h, flag }
      : { type: "img", src: `assets/img/${slug}/${name}.jpg`, thumb: `assets/img/${slug}/${name}-s.jpg`, w, h, flag, obj: flag === "obj" };
  }

  /* ---------- home: full-bleed good girl ---------- */
  if (page === "home") {
    const video = document.querySelector(".hero video");
    const LOOP_START = 7, LOOP_END = 44;      // skip the title card and the black ending
    const btn = document.querySelector(".toggle");
    let playing = !reduce;

    // sharper file on big screens, lighter one on phones
    video.src = window.matchMedia("(max-width: 900px)").matches
      ? "assets/video/good-girl-xs.mp4" : "assets/video/good-girl-hd.mp4";

    const toStart = () => { if (video.currentTime < LOOP_START) video.currentTime = LOOP_START; };
    video.addEventListener("loadedmetadata", toStart);
    video.addEventListener("timeupdate", () => {
      if (video.currentTime > LOOP_END || video.currentTime < LOOP_START - 0.5) video.currentTime = LOOP_START;
    });

    function set(on) {
      playing = on;
      on ? video.play().catch(() => {}) : video.pause();
      btn.textContent = on ? "pause" : "play";
    }
    btn.addEventListener("click", () => set(!playing));
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) video.pause(); else if (playing) set(true);
    });
    set(playing);

    const top = document.querySelector(".top");
    const hero = document.querySelector(".hero");
    const solid = () => top.classList.toggle("solid", scrollY > hero.offsetHeight - top.offsetHeight);
    addEventListener("scroll", solid, { passive: true });
    solid();
  }

  /* ---------- work: big staggered tiles under the video (after objectanimal.com) ---------- */
  const grid = document.querySelector(".grid-work");
  if (grid) {
    grid.innerHTML = P.map((p, i) => {
      const media = p.media.map((m) => parseMedia(p.slug, m));
      // tile: an extra image used only as the tile on the home page ("tile:WxH" → assets/img/<slug>/tile.jpg)
      const c = (p.tileImg && parseMedia(p.slug, p.tileImg)) || media.find((m) => m.src.includes(`/${p.cover}.`)) || media[0];
      const pic = p.placeholder ? `<span class="soon">${esc(p.placeholder)}</span>`   // grey tile with a short note
        : !c ? `<span class="soon">images soon</span>`
        : c.type === "video" && p.still
          ? `<img src="${c.poster}" width="${c.w}" height="${c.h}" alt="" loading="lazy" decoding="async">`   // still: only the first frame, no hover video
        : c.type === "video"
          ? `<img src="${c.poster}" alt="" loading="lazy" decoding="async"><video src="${c.src}" muted loop playsinline preload="none" aria-hidden="true"></video>`
          : `<img src="${c.src}" width="${c.w}" height="${c.h}" alt="" loading="lazy" decoding="async">`;
      return `<li><a class="tile${(p.fit === "contain" || p.tile === "contain") ? " contain" : ""}" href="${url(p)}">
        <span class="pic">${pic}</span>
        <span class="cap"><span>${esc(p.title)}</span><span class="muted">${esc(p.client || p.year)}</span></span>
      </a></li>`;
    }).join("");
    // coming from another page (work link): jump to the tiles once they exist
    if (location.hash === "#work") requestAnimationFrame(() => document.getElementById("work").scrollIntoView());

    // video covers play while you hover them
    grid.querySelectorAll(".tile").forEach((t) => {
      const v = t.querySelector("video");
      if (!v || reduce) return;
      t.addEventListener("mouseenter", () => { v.play().catch(() => {}); t.classList.add("playing"); });
      t.addEventListener("mouseleave", () => { v.pause(); t.classList.remove("playing"); });
    });
  }

  /* ---------- project: thumbnail strip + big image + info (after maatoke) ---------- */
  if (page === "project") {
    const slug = new URLSearchParams(location.search).get("p");
    const idx = Math.max(0, P.findIndex((x) => x.slug === slug));
    const p = P[idx];
    const prev = P[(idx - 1 + P.length) % P.length], next = P[(idx + 1) % P.length];
    const media = p.media.map((m) => parseMedia(p.slug, m));
    const total = media.length;
    document.title = `${p.title} — charlotte zagt`;
    document.body.classList.toggle("is-object", p.fit === "contain");   // scanned objects get space around them

    const strip = document.querySelector(".strip");
    const stage = document.querySelector(".stage");
    document.querySelector(".pnum").textContent = `${pad(idx + 1)}.`;

    strip.innerHTML = media.map((m, k) =>
      `<button type="button" class="thumb" data-i="${k}" aria-label="show ${m.type === "video" ? "video" : "image"} ${k + 1} of ${total}">
        <img src="${m.type === "video" ? m.poster : m.thumb}" width="${m.w}" height="${m.h}" alt="" decoding="async"${m.obj ? ' class="obj"' : ""}></button>`).join("");
    strip.hidden = total < 2;

    const info = document.querySelector(".pinfo");
    if (p.info) info.style.setProperty("--info", p.info);
    info.innerHTML = `
      <h1>${esc(p.title)}</h1>
      ${p.medium ? `<p class="muted">${esc(p.medium)}</p>` : ""}
      ${p.role ? `<p class="muted">${esc(p.role)}</p>` : ""}
      <p class="muted">${[p.client, p.year].filter(Boolean).map(esc).join(", ")}</p>
      ${p.credits ? `<p class="muted">${esc(p.credits)}</p>` : ""}
      <div class="text">${p.text.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
`;
    document.querySelector(".pbar").innerHTML = `
      <a class="ul" href="index.html#work">\u2190 all work</a>
      <nav aria-label="more work"><a class="ul" href="${url(prev)}">prev</a> / <a class="ul" href="${url(next)}">next</a></nav>`;

    const count = document.querySelector(".ctrl .count");
    let at = 0;
    function show(n) {
      if (!total) { stage.innerHTML = `<p class="soon">images coming soon</p>`; return; }
      at = (n + total) % total;
      const m = media[at];
      stage.innerHTML = m.type === "video"
        ? `<video src="${m.src}" poster="${m.poster}" width="${m.w}" height="${m.h}" controls playsinline loop ${reduce ? "" : "autoplay muted"} aria-label="${esc(p.title)}, video"></video>`
        : `<img src="${m.src}" width="${m.w}" height="${m.h}" alt="${esc(p.title)}, image ${at + 1} of ${total}">`;
      strip.querySelectorAll(".thumb").forEach((t) => t.setAttribute("aria-current", String(+t.dataset.i === at)));
      stage.classList.toggle("obj", !!m.obj);
      stage.classList.toggle("sm", m.flag === "sm");
      stage.classList.toggle("phone", m.flag === "phone");
      count.textContent = `${at + 1}/${total}`;
      const active = strip.querySelector(`[data-i="${at}"]`);
      if (active) active.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduce ? "auto" : "smooth" });
      const nx = media[(at + 1) % total];
      if (nx && nx.type === "img") new Image().src = nx.src;
    }
    strip.addEventListener("click", (e) => { const t = e.target.closest(".thumb"); if (t) show(+t.dataset.i); });

    // vertical mouse wheel scrolls the strip sideways while it still can
    strip.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const max = strip.scrollWidth - strip.clientWidth;
      if (max <= 0) return;
      if ((e.deltaY > 0 && strip.scrollLeft >= max - 1) || (e.deltaY < 0 && strip.scrollLeft <= 0)) return;
      e.preventDefault();
      strip.scrollLeft += e.deltaY;
    }, { passive: false });

    // arrows (and keyboard) step through the images
    document.querySelector(".ctrl .prev").addEventListener("click", () => show(at - 1));
    document.querySelector(".ctrl .next").addEventListener("click", () => show(at + 1));
    document.addEventListener("keydown", (e) => {
      if (total < 2 || /INPUT|TEXTAREA|VIDEO/.test(document.activeElement.tagName)) return;
      if (e.key === "ArrowRight") show(at + 1);
      if (e.key === "ArrowLeft") show(at - 1);
    });
    document.querySelector(".ctrl").hidden = total < 2;
    show(0);
  }

  /* ---------- about: list of work ---------- */
  if (page === "about") {
    const ul = document.querySelector("[data-work]");
    if (ul) ul.innerHTML = P.map((p) => `<li><a class="ul" href="${url(p)}">${esc(p.title)}</a>, ${esc(p.year)}</li>`).join("");
  }
})();
