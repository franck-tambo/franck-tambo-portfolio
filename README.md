# Franck Tambo Portfolio

A responsive React + TypeScript + Vite portfolio with an English/French language switch.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
1. Extract this folder.
2. Open it in VS Code.
3. Open the integrated terminal in this folder.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the local URL printed by Vite (usually http://localhost:5173).

## Create a production build
```bash
npm run build
npm run preview
```

## Profile photo
Place your portrait at:
`public/resources/franck-profile.png`

The site displays a styled fallback if the image is not present.

## Main files
- `src/App.tsx` — portfolio content, projects, language toggle and interactions
- `src/style.css` — responsive design and visual styling
- `src/main.tsx` — React entry point
- `index.html` — page metadata and app mount point
- `package.json` — dependencies and commands

## Personal links
Update the contact and social links in `src/App.tsx` if they change.
