import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://chimerical-cuchufli-35a931.netlify.app",
  integrations: [preact()]
});