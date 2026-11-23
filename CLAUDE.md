# Portfolio: Diego Salamanca Murphy

## Rules

- Astro static site at https://diegosalamancaa.github.io (user site, no base path).
- Project pages are Markdown in `src/content/projects/`. Frontmatter: `title`, `role`, `dates`, `category` (Propulsion | Robotics | Research | Leadership), `summary`, `cover`, `featured`.
- KaTeX for math (remark-math + rehype-katex). Inline `$...$`, display `$$...$$`.
- Minimal technical design: whitespace, one accent color, one sans + one mono font, no gradients, no emoji, no template look.
- Plain, specific copy. Numbers over adjectives. No filler ("passionate", "innovative", "leveraging").
- Never invent project facts. If info is missing, leave a visible TODO.
- Minimal dependencies.

## Conventions

- **TODOs**: in Markdown bodies write `<span class="todo">TODO: what is missing</span>`. The class renders it highlighted on the live site. In frontmatter, any string field starting with `TODO` is also rendered highlighted. Find all of them with `grep -rn TODO src/`.
- **Images**: `cover` is a path relative to the Markdown file, validated and optimized by Astro's `image()` schema. New images go in `src/assets/projects/<slug>/`. Images scraped from the old Google Site stay in `content/` and are referenced from there.
- **`content/`** is the raw archive of the old Google Site (one folder per page: `text.md`, `img-NN.*`, plus `manifest.json`). Treat it as source material, not site content. `img-01.jpg` in every folder is the headshot.
- **Experience timeline** data lives in `src/data/experience.ts` (ordered manually, newest first).
- **Site-wide data** (name, emails, links) lives in `src/data/site.ts`. No phone number anywhere.
- **Styling** lives in `src/styles/global.css`. Accent color is `--accent`. Fonts: Inter (sans), JetBrains Mono (mono), from Google Fonts.
- Dependencies are only `astro`, `@astrojs/markdown-remark`, `remark-math`, `rehype-katex`, `katex`. Astro 7's default Markdown processor ignores remark/rehype plugins, so `astro.config.mjs` sets `markdown.processor: unified({...})` from `@astrojs/markdown-remark`. `overrides.katex` in package.json keeps nested KaTeX copies on the same patched version.

## Commands

- `npm run dev`: local dev server
- `npm run build`: static build into `dist/`
- Deploy: push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
