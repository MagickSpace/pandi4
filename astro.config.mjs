import react from '@astrojs/react';
import pandacss from '@pandacss/astro';
import { defineConfig } from 'astro/config';
import million from "million/compiler";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      million.vite({
        mode: "react",
        server: true,
        auto: {
          threshold: 0.05,
          skip: ["useBadHook", /badVariable/g],
        },
      }),
    ],
  },
  integrations: [react(), pandacss()]
});