# Tzuhan Hsu - Personal Portfolio

A modern personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and next-intl for internationalization.

## Features

- ✨ Modern React with Next.js 14 App Router
- 🎨 Tailwind CSS for styling
- 🌍 Multi-language support (English, Chinese, Japanese)
- 📱 Fully responsive design
- ⚡ Static site generation for optimal performance
- 🎯 TypeScript for type safety

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

### Deploying to GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. The `out` directory contains the static files ready for deployment.

3. Copy the contents of the `out` directory to your GitHub Pages repository root.

## Project Structure

```
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Root layout with i18n
│   │   └── page.tsx       # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Main navigation
│   └── sections/          # Page sections
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Education.tsx
│       ├── Skills.tsx
│       ├── Interests.tsx
│       └── Certifications.tsx
├── i18n/
│   ├── request.ts         # i18n configuration
│   └── routing.ts         # Routing configuration
├── lib/
│   └── data/              # Static data
│       ├── social-links.ts
│       └── skills.ts
├── messages/              # Translation files
│   ├── en.json
│   ├── zh.json
│   └── ja.json
└── public/                # Static assets
```

## License

MIT
