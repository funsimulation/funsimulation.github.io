# Fun Simulation — GitHub Pages Website

**One-page Android gaming studio website + separate Privacy Policy page**

Is website ko GitHub Pages par host karne ke liye **server, database, WordPress, React, npm, PHP ya Node ki zaroorat nahi**. ZIP extract karke files upload karni hain.

## 1. Files ka structure

```text
Fun-Simulation-GitHub-Website/
├── index.html             Main one-page website
├── content.js             ⭐ EDIT KARNE KI MAIN FILE
├── script.js              Buttons, search, filters, game popup
├── style.css              Colors, fonts, layout
├── privacy.html           Privacy Policy page
├── privacy-content.js    ⭐ Privacy Policy editing file
├── README.md              Yeh instructions
└── assets/
    ├── logo.svg           Placeholder logo — future mein replace kar sakte ho
    └── covers/            Local decorative fallback covers (8 games)
```

**Important:** ZIP ko GitHub par as-is upload **mat** karo. ZIP ko **extract** karo aur andar ki saari files/folders repository ke root mein upload karo.

## 2. GitHub Pages par website publish karna

1. GitHub mein nayi repository banao, e.g. `fun-simulation-games`.
2. Extracted folder open karo, uske andar ki **saari files aur `assets` folder** select karke GitHub repo ke root mein upload karo.
3. GitHub → **Settings → Pages**.
4. Build and deployment → Source = **Deploy from a branch**.
5. Branch = `main`, Folder = `/ (root)` → **Save**.
6. URL project repo ke liye `https://USERNAME.github.io/fun-simulation-games/` hoga. Agar repo ka naam exact `USERNAME.github.io` hai to URL `https://USERNAME.github.io/` hoga.
7. Website update ke baad browser hard refresh karo (Mac: **Cmd+Shift+R**; Windows: **Ctrl+Shift+R**).

Privacy Policy ka path `https://USERNAME.github.io/fun-simulation-games/privacy.html` (ya repo root site par `/privacy.html`) hoga.

> Google Play Console mein apni games ke Privacy Policy link ko actual published URL ke hisaab se update kar sakte ho.

## 3. Branding, email aur tagline change karna

**`content.js`** open karo, upar yeh fields milengi:

```js
"name": "Fun Simulation",
"logo": "assets/logo.svg",
"email": "actiongamersstudio@gmail.com",
"heroTitle": "Play your world.\\nMake every moment fun.",
"heroDescription": "From open-world driving adventures ...",
"developerUrl": "https://play.google.com/store/apps/developer?id=FunSimulation",
```

`\\n` ka matlab next line. Hero tagline/description/About/Contact/Services isi file mein edit karo. `index.html` ko normally edit karne ki zaroorat nahi.

Logo replace karne ke liye **`assets/logo.svg`** overwrite kar do. Agar PNG logo lagana ho to `content.js` mein `logo` ko `assets/my-logo.png` karna aur `assets` mein us PNG ko upload karna. Tab favicon (`index.html`/`privacy.html`) bhi change karna hoga agar browser-tab logo bhi naya chahiye. **Invalid SVG file upload mat karna** — purani website mein yahi problem hui thi.

## 4. Naya game add karna

`content.js` mein `"games": [ ... ]` ke andar naya game object add karo. Example:

```js
{
  "id": "my-game",              // unique lowercase id
  "title": "My New Game",
  "category": "Driving",        // Driving, Simulation, Wildlife, Puzzle, Sports
  "label": "DRIVING / 3D",
  "description": "Short game description.",
  "link": "https://play.google.com/store/apps/details?id=YOUR.PACKAGE.ID",
  "image": "assets/games/mygame.jpg",
  "screenshots": ["assets/games/screen1.jpg", "assets/games/screen2.jpg"],
  "featured": false,
  "fallback": "assets/covers/van.svg"
}
```

**Note:** Example ke `//` comments JSON-format `content.js` ke game objects ke andar mat paste karna. Pura object insert karte waqt `//` comments hata dena aur previous game ke baad comma lagana. Existing object copy karke sirf values change karna sabse easy hai.

- **Game delete**: uska poora `{ ... }` object remove kar do; comma placement theek rakhna.
- **Featured game change**: jis game ko top hero card par dikhana hai uska `"featured": true`, baqi sab `false`.
- **Screenshot change**: `"image"` mein naya image URL ya `assets/games/filename.jpg`.
- **Additional screenshots**: `"screenshots": ["...", "..."]` list edit karo — detail popup mein show hongi.
- **Category change**: existing filter name hi use karo. Nayi category chahiye to `index.html` ke filters mein bhi naya button add karo.
- **Games count**: automatically games array length se update hota hai.
- **Search/filter**: users website par search box, category filters, Game Details popups use kar sakte hain.

**Static fallback:** `index.html` ke andar current 8 games ka backup HTML bhi hai, jo JavaScript fail hone par blank homepage ke issue se bachata hai. `content.js` mein games add/remove karne par normal working website automatically update ho jayegi. Agar chaho ke bina JavaScript ke bhi newly added game cards show hon, `index.html` ke static card markup ko bhi update karna hoga.

## 5. Screenshots / images

Initial eight listings ke liye **Google Play-hosted gameplay screenshot URLs** configured hain. Kabhi external image URL load na ho to website local `assets/covers/*.svg` decorative cover use karegi.

Best long-term method: Apni Google Play screenshots download karke `assets/games/` folder create kar lo, screenshots upload karo, aur `content.js` ki `image` / `screenshots` values local path se replace kar do. Is se external hotlink par dependency khatam ho jayegi.

> Local SVG covers **original gameplay screenshots nahi hain**; woh sirf visually designed fallback cards hain.

## 6. Social media add karna

`content.js` mein:

```js
"socials": [
  {"name":"YouTube", "url":"https://youtube.com/@yourchannel"},
  {"name":"Instagram", "url":"https://instagram.com/yourpage"},
  {"name":"Facebook", "url":"https://facebook.com/yourpage"}
],
```

Abhi `"socials": []` hai. Jab tak links add nahi karte tab tak unused blank social buttons nahi dikhte.

## 7. Privacy Policy edit karna

**`privacy-content.js`** open karo. Ismein bilkul pehli **Specular Games wali 17-section Privacy Policy** ki wording hai — sirf company name `Fun Simulation`, email `actiongamersstudio@gmail.com`, aur Last Updated date change ki gayi hai.

Privacy Policy mein following third-party providers covered hain:
- Google AdMob
- AppLovin / AppLovin MAX
- Meta Audience Network
- Liftoff / Vungle
- Unity Ads
- Chartboost
- Yandex
- Google Analytics for Firebase
- Firebase Crashlytics
- Google Play Services

**Privacy compliance warning:** Yeh existing policy text se adapted hai; legal review ki guarantee nahi. Publish karne se pehle confirm karo ke actual game builds ke SDKs, Google Play Data Safety declarations, consent flows, children targeting aur data retention is policy se match karte hain. Kuch store listings ke public Data Safety disclosures is common template se alag ho sakte hain. Har game ke actual data practices ke hisaab se changes zaroor karo.

### Change karne ka tareeqa

```js
const PRIVACY = {
  lastUpdated: "November 17, 2026",
  html: `<article class="privacy-document"> ... </article>`
};
```

Privacy HTML ke headings (`<h2>`), paragraphs (`<p>`), lists (`<ul><li>`) aur links directly edit kar sakte ho. File ko plain JavaScript format mein hi save karo. `privacy.html` ko normally edit karne ki zaroorat nahi. Privacy page mein original text ka static fallback bhi hai.

## 8. Troubleshooting

- **Blank page?** Check karo saari files root mein hain (`index.html`, `content.js`, `script.js`, `style.css`). `content.js` JavaScript syntax sahi rakho. Website ka static layout phir bhi dikhna chahiye.
- **Logo missing?** `assets/logo.svg` file ka direct URL kholo. Agar browser XML error de, SVG invalid hai; valid SVG upload karo.
- **Some game images missing?** External Play screenshot URLs kabhi expire ya block ho sakti hain; apni images `assets/games/` mein upload karo.
- **Old content show ho raha?** Cache clear ya hard refresh karo aur GitHub Actions/Pages deployment status check karo.
- **Privacy Policy missing?** `privacy.html` aur `privacy-content.js` dono upload karo.

---
**Contact:** actiongamersstudio@gmail.com  
**Developer profile:** https://play.google.com/store/apps/developer?id=FunSimulation
