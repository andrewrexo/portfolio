import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const mdsvexOptions = {
  extensions: ['.md']
};

/** @type {import('@sveltejs/kit').Config}*/
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: sequence([vitePreprocess(), mdsvex(mdsvexOptions), preprocessMeltUI()]),
  extensions: ['.svelte', '.md'],
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      },
      platformProxy: {
        environment: undefined,
        experimentalJsonConfig: false,
        persist: false
      }
    }),
    alias: {
      $components: './src/components',
      $lib: './src/lib',
      $projects: './src/projects',
      $routes: './src/routes',
      $styles: './src/styles',
      $types: './src/types',
      $utils: './src/utils'
    },
    prerender: {
      crawl: true,
      entries: [
        '/projects/opentxpacker',
        '/projects/milkshake',
        '/projects/mappingtool',
        '/projects/opentxpacker',
        '/projects/',
        '/post',
        '/',
        '/post/choosing-svelte'
      ]
    }
  }
};
export default config;
