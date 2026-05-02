# Chowdeck Clone – Webinar Demo

A UI clone of [Chowdeck](https://chowdeck.com) built for webinar preparation. Two versions included:

| Version | Tech | Live URL |
|---------|------|----------|
| **Static** | HTML + CSS + Vanilla JS | `https://<user>.github.io/chowdeck-clone-webinar/` |
| **React SPA** | Vite + React + React Router | `https://<user>.github.io/chowdeck-clone-webinar/app/` |

## Pages

- **Homepage** – Hero, category chips, featured products
- **Product List** – Filterable grid of food items
- **Product Detail** – Full product info, add-to-cart UI, related items

## Local Development

### Static version
Open `static/index.html` in your browser – no build step needed.

### React version
```bash
cd app
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a GitHub repo named `chowdeck-clone-webinar`
2. Push this code to the `main` branch
3. Go to **Settings → Pages → Source → GitHub Actions**
4. The included workflow (`.github/workflows/deploy.yml`) builds & deploys automatically on every push to `main`
