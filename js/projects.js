/*
  ALL PROJECTS LIVE HERE.
  To add a project: copy one block, change the fields, and put its images in
  assets/img/<slug>/ (01.jpg + 01-s.jpg as a small version, 02.jpg …).

  group:   "projects" or "extra"
  medium:  what it is (event, publication, app …), shown under the title
  role:    what i did, shown under the medium
  client:  optional, who it was for (shown with the year)
  credits: optional extra line (e.g. "collaborative project")
  info:    optional background colour for the info box on the project page
  media:   "file:WIDTHxHEIGHT" for images, "video:file:WIDTHxHEIGHT" for videos
           (leave empty [] when the images are not there yet)
*/
window.PROJECTS = [
  {
    slug: "space-9",
    tags: "concept",
    group: "projects",
    title: "space 9",
    medium: "campaign, app",
    client: "ikea \u00d7 de her (speculative)",
    year: "2026",
    role: "concept, campaign, app prototype",
    text: [
      "almost a third of dutch people who got rid of furniture did so because it no longer matched their style, not because it was broken. 88% of them believe it was still usable. we outgrow our furniture, but our furniture isn\u2019t done with us yet.",
      "so, for ikea, i developed space 9 together with de her, rotterdam\u2019s place for passing on and reusing: neighbourhood hubs where you can hand in, take apart and give your ikea furniture a next life, close to home."
    ],
    still: true,   // a still of the app as the tile on the home page
    placeholder: "still in progress",   // grey tile in the work overview for now (remove this line to show the app again)
    media: ["video:space9-app:562x1222:phone", "video:space9-news:1920x1320", "01:1123x1600:obj", "02:1600x1124:obj", "03:1600x1127:obj", "04:1600x1127:obj", "05:1600x1124:obj", "06:1123x1600:obj"]   // deconstruction manual scans
  },
  {
    slug: "grey-area",
    tags: "photography, video",
    group: "projects",
    title: "grey area",
    medium: "photography, video",
    year: "2026",
    role: "concept, art direction, production, photography, edit, bookmaking",
    credits: "collaborative project with finbar rodger",   // concept, photography and part of the art direction together
    text: [
      "never before has the human form been so easy to replicate. as ai-generated models enter the fashion industry, a model can work, pose and appear in campaigns without ever physically being there.",
      "the grey area explores bodily autonomy and the shifting boundaries of consent. do we really know what we agree to? and what are the rights of models when their likeness can live on without them?",
      "we focused on what ai can’t replicate: the pores, scars and stretch marks of a real body. clauses from real modelling contracts were projected onto the skin in green light, a machine reading a body it can never fully own.",
      "this resulted in an editorial and moving image that asks what models are signing away, and what remains theirs."
    ],
    cover: "06",   // overview tile: the booklet spread of her lying on the bed
    media: ["video:grey-area:640x480", "01:1127x1600:obj", "02:1600x1162:obj", "03:1600x1162:obj", "04:1600x1162:obj", "05:1600x1162:obj", "06:1600x1162:obj", "07:1123x1600:obj"]   // video, then the booklet scans
  },
  {
    slug: "tropical-being",
    tags: "concept",
    group: "projects",
    title: "tropical being",
    medium: "publication",
    year: "2026",   // TODO: jaar controleren
    role: "bookbinding, embroidery",
    text: [
      "a small booklet of moments with my loved ones. bound by hand, using embroidery techniques on the cover."
    ],
    fit: "contain",   // show the whole scanned object in the grid instead of cropping
    media: ["01:1034x1448", "02:1386x1600", "03:1600x1115", "04:1599x1600", "05:1600x1116", "06:1580x1600", "07:1138x1600"]
  },
  {
    slug: "sound-of-you",
    tags: "production",   // used for the filters on the work page
    group: "projects",
    title: "sound of you",
    medium: "event",
    client: "ANOTR",
    year: "2025",
    role: "production",
    text: [
      "a month, one idea and quite a few things to figure out.",
      "for the release of ANOTR’s ‘Sound of You’, i was asked to help create an activation around the world of the track. old trucks, lights and, most importantly, rain.",
      "“is it raining yet?” comes back throughout the song, making rain an important part of the concept. the original idea was to take the activation outside, but with the expected capacity and municipal restrictions, we had to bring it indoors. so, how do you make it rain inside?",
      "i proposed locations and explored ways to recreate the feeling of rain through smoke and mist. from there, i took care of sourcing the trucks, arranging the technical setup, crew and suppliers, and making sure all the different parts came together on the day."
    ],
    cover: "01",   // keep the photo as the tile on the home page
    media: ["video:sound-of-you:1280x960", "01:1279x1600", "02:1279x1600", "video:soy-rain:886x1524", "03:1280x1600", "05:1200x1600", "video:soy-monitor:1080x1440", "04:1200x1600", "07:1200x1600"]
  },
  {
    slug: "shoes-in-bed",
    tags: "production",   // used for the filters on the work page
    group: "projects",
    title: "nike superfly",
    medium: "event",
    client: "nike × nho girl",
    year: "2025",
    role: "production",
    text: [
      "shoes in bed? something most of us aren’t allowed to do. for this one, it was kind of the point.",
      "the idea was there: the new Nike Superfly, omakase and one very big bed. with a month to make it happen, i took on the production and started filling in the blanks.",
      "12 mattresses, 100 pillows and quite a few phone calls later, the bed was ready and so was the rest.",
      "if you ever need 12 mattresses, give me a call."
    ],
    media: ["01:1200x1600", "03:1200x1600", "04:1200x1600", "05:1200x1600", "08:1200x1600", "06:1279x1600", "07:1200x1600", "09:1280x1600"]
  },
  {
    slug: "south-africa",
    tags: "photography, bookmaking",   // used for the filters on the work page
    group: "projects",
    title: "mzansi",
    medium: "publication",
    year: "2025",
    role: "photography, risoprint, bookmaking",
    text: [
      "while travelling through south africa, i became interested in the contrasts i saw around me. a beautiful country, while the divide between wealth and poverty is still visible in everyday life.",
      "i used photography to capture my own observations, which later came together in a handmade book, using risoprint techniques."
    ],
    tile: "contain",   // show the whole (landscape) cover in the work overview
    media: ["05:1600x1117:obj", "06:1600x808:obj", "07:1600x901:obj", "08:1600x784:obj", "09:1600x787:obj", "10:1600x797:obj", "11:1600x1111:obj"]
  },
  {
    slug: "shared",
    tags: "concept",   // used for the filters on the work page
    group: "extra",
    title: "shared",
    medium: "app",
    client: "depop (speculative)",
    year: "2025",
    role: "concept, app mock-ups",
    cover: "depop-app",   // the red depop start screen is the tile on the home page
    still: true,          // …as a still image, the video only plays on the project page
    text: [
      "with shared, your closet becomes part of something bigger. most of us own more than we realize, pieces that sit unworn but full of potential.",
      "by uploading your wardrobe to depop, you can track what you own, get reminders for unworn items and share them instantly with others. each shared piece carries its own story, connecting people through shared use and memories.",
      "the more an item is shared, the more meaning and value it holds."
    ],
    media: ["deck-01:1600x1131:sm", "deck-02:1600x1131:sm", "deck-03:1600x1131:sm", "deck-04:1600x1131:sm", "video:depop-app:650x1412:phone"]
  },
  {
    slug: "collage-book",
    tags: "bookmaking",
    group: "projects",
    title: "collage book",
    medium: "publication",
    year: "2024",
    role: "collage, editorial design, bookmaking",
    fit: "contain",
    text: [
      "a book that started with scissors. i first made collages from cut-out magazines, scanned them in and reworked them in indesign. after printing, i added to it by hand."
    ],
    media: ["01:1137x1600", "02:1169x1600", "03:1195x1600", "04:1193x1600", "05:1162x1600", "06:1135x1600"]
  },
  {
    slug: "open-up",
    tags: "concept",   // used for the filters on the work page
    group: "extra",
    title: "open up",
    medium: "tabletop game",
    year: "2024",
    role: "concept",
    text: [
      "open up: the talk. we all know it can be an awkward one.",
      "research showed that parents want to talk openly with their children about relationships and sexuality, but don’t always know how, when, or even where to start.",
      "so, how can we make that first step feel a little less scary?",
      "Open Up is an interactive tabletop game designed to get the conversation going. through questions, topics and a few awkward moments, parents and children can explore relationships and sexuality.",
      "because sometimes all you need is something to put on the table."
    ],
    media: ["01:1200x1600", "03:1102x1600:obj", "04:1600x1265:obj", "05:1600x1259:obj", "06:1589x1600:obj", "07:1132x801", "08:1136x803", "09:1092x794"]
  },
  {
    slug: "good-girl",
    tags: "concept, video",   // used for the filters on the work page
    group: "extra",
    title: "good girl",
    medium: "video",
    year: "2024",
    role: "concept, styling, videography and edit",
    text: [
      "a personal reflection on feeling both seen and invisible within a photoshoot, capturing the emotions and self-doubt that exist behind the final image."
    ],
    tileImg: "tile:1066x1600",   // photo from the shoot as the tile on the home page
    media: ["video:good-girl:960x624"]
  },
  {
    slug: "ceramics",
    tags: "ceramics",   // used for the filters on the work page
    group: "extra",
    title: "ceramics",
    medium: "practice",
    year: "ongoing",
    text: [
      "ceramics has been an ongoing interest of mine, and i’m finally starting to get the hang of it.",
      "my tutor once told me, “you should feel like you and the clay are becoming one.” i like that idea. you can start with a plan, but the clay has a say in it too. sometimes something completely unexpected comes out of it."
    ],
    media: ["01:1200x1600", "02:1200x1600", "03:1200x1600", "04:1200x1600", "05:1200x1600", "06:1200x1600", "07:1200x1600", "08:1200x1600"]
  }
];
