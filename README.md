# Portfolio

Personal portfolio website — Nguyen Van Anh · Backend Engineer.

## Tech Stack

- HTML5 · CSS3 · Vanilla JavaScript (ES Modules)

## Features

- Dark / Light Mode (persisted via localStorage)
- Responsive Design (1440px → 375px)
- Dynamic Data Rendering (all content from JS data files)
- Scroll Spy Navigation (sidebar + mobile nav)
- Contact Form (client-side validation + feedback)
- Toast Notifications (copy link)
- Progressive Web App (manifest.json)

## Run

```bash
python -m http.server 5500
```

or

```bash
npx serve .
```

Then open `http://localhost:5500`.

## Project Structure

```
├── index.html
├── css/
│   ├── main.css               # Entry — imports all partials
│   ├── base/
│   │   ├── reset.css
│   │   ├── variables.css      # Design tokens (light + dark)
│   │   ├── typography.css
│   │   └── global.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── chips.css
│   │   ├── forms.css          # Includes error/success states
│   │   ├── timeline.css
│   │   ├── floating-actions.css
│   │   ├── theme-toggle.css
│   │   ├── mobile-nav.css     # Sticky mobile nav (< 900px)
│   │   └── toast.css          # Toast notification
│   └── layout/
│       ├── container.css
│       ├── hero.css
│       ├── sidebar.css
│       ├── sections.css       # All section styles + breakpoints
│       └── footer.css
├── js/
│   ├── main.js                # App entry — wires all modules
│   ├── core/
│   │   ├── constants.js
│   │   ├── selectors.js
│   │   └── storage.js
│   ├── data/
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experience.js
│   └── modules/
│       ├── renderHero.js
│       ├── renderSidebar.js
│       ├── renderMobileNav.js
│       ├── renderAbout.js
│       ├── renderSkills.js
│       ├── renderProjects.js
│       ├── renderExperience.js
│       ├── renderContact.js
│       ├── renderFooter.js
│       ├── theme.js
│       ├── scrollspy.js
│       ├── floating-actions.js
│       └── contact-form.js
├── assets/
│   ├── images/
│   │   ├── avatar/avatar.jpg
│   │   └── projects/
│   ├── documents/Nguyen-Van-Anh-CV.pdf
│   └── favicon/favicon.ico
├── data/portfolio.json
├── manifest.json
├── robots.txt
└── sitemap.xml
```
