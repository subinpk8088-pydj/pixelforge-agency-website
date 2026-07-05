# PixelForge — Creative Design Agency

A clean, minimal creative agency website built with **React + Vite + Framer Motion**.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## ✨ Features

- Clean minimal aesthetic — white, deep navy, and electric lime green
- Filterable portfolio grid with 6 real project showcases
- Full services section with 6 offering cards
- 5-step process timeline with animated connectors
- Team section with 4 senior member profiles
- Full project inquiry form with budget, timeline and service fields
- Animated client marquee strip on navy background
- Navy CTA footer strip with lime headline accent
- Framer Motion on every section — fade-ins, hover lifts, spring buttons
- Fully responsive — 375px to 4K

---

## 🗂 Project Structure

```
pixelforge/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── Clients.jsx / .css
        ├── Services.jsx / .css
        ├── Work.jsx / .css
        ├── Process.jsx / .css
        ├── Team.jsx / .css
        ├── Testimonials.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/pixelforge-agency-website.git

cd pixelforge-agency-website

npm install

npm run dev
```

Open `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## ☁️ Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub → import at [vercel.com](https://vercel.com) → auto-deploys. ✅

---

## 🎨 Design System

| Token        | Value       | Usage               |
|--------------|-------------|---------------------|
| `--white`    | `#ffffff`   | Page background     |
| `--bg`       | `#f8f9fc`   | Section alt bg      |
| `--navy`     | `#0f1c3f`   | Text, headings, CTA |
| `--lime`     | `#aaee44`   | Accent, highlights  |
| `--lime-dk`  | `#88cc22`   | Labels, tags        |
| `--muted`    | `#6b7899`   | Body text           |

**Fonts:** `Syne 800` (headings) · `Manrope` (body)

---

## 📌 Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed, scroll-aware blur, lime underline hover, Start a Project CTA |
| **Hero** | Split layout, floating stat cards, available badge with pulsing dot |
| **Clients** | Scrolling navy marquee strip with 8 client names |
| **Services** | 6 service cards with tags and arrow hover animation |
| **Work** | Filterable portfolio grid (All/Brand/Web/Product/Motion), year badge |
| **Process** | 5-step vertical timeline with durations |
| **Team** | 4 team cards with ex-company lime badges |
| **Testimonials** | 3 reviews with author photos |
| **Contact** | Split layout form — service, budget, timeline, brief textarea |
| **Footer** | Navy CTA strip + 4-column light footer, SVG social icons |

---

## 🛠 Customisation

- **Colors** → `src/styles/global.css`
- **Services** → `Services.jsx` — edit the `services` array
- **Portfolio** → `Work.jsx` — edit the `projects` array + swap Unsplash URLs
- **Team** → `Team.jsx` — edit `members` array
- **Contact info** → `Contact.jsx` and `Footer.jsx`

---

## 👨‍💻 Built By

**VertexFlow Digital Solutions**

---

## 📄 License

MIT — free to use for client projects.
