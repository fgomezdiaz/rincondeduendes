// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

//import vercel from '@astrojs/vercel/serverless';



import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  //adapter: vercel({webAnalytics: { enabled: true }}),
});