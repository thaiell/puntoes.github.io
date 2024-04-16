import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), db(), icon()],
  output: "server",
  adapter: vercel(),
  site: 'https://thaiell.github.io',
  base: "/puntoes"
/*   redirects: {
    "/": {
      status: 401,
      destination: "/"
    }
  } */
});