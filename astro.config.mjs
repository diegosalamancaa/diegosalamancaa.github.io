import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://diegosalamancaa.github.io',
  // Experience and contact now live on the about page.
  redirects: {
    '/experience': '/about/#experience',
    '/contact': '/about/#contact',
  },
  markdown: {
    // Astro 7's default Markdown processor doesn't run remark/rehype plugins,
    // so use the unified processor for KaTeX.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
