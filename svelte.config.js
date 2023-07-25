import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
        // default options are shown. On some platforms
        // these options are set automatically — see below
        pages: 'build',
        assets: 'build',
        fallback: undefined,
        precompress: false,
        strict: true
    }),
    paths: {
      base: dev ? '' : "/uek-1.github.io",
    },
    prerender: {
      entries: ['/blog/1', '/blog/', '/projects/', '/']
    }
  }
};

export default config;
