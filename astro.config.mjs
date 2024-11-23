import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import swup from '@swup/astro'

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import { remarkTOC } from './src/plugins/remark-toc.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    swup({
      theme: false,
      containers: ['main', '.dynamic-ele'],
      smoothScrolling: true,
      progress: true,
      // cache: true,
      // preload: true,
      // accessibility: true,
      globalInstance: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
    },
    remarkPlugins: [
      remarkReadingTime,
      remarkTOC,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [rehypeAutolinkHeadings, {
        behavior: 'prepend',
      }],
    ],
  },
})
