import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://diegosalamancaa.github.io',
  markdown: {
    // Astro 7's default Markdown processor doesn't run remark/rehype plugins,
    // so use the unified processor for KaTeX.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
