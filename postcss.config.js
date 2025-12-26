import tailwindcss from '@tailwindcss/postcss';

const buildLogger = {
  postcssPlugin: 'postcss-build-logger',
  Once() {
    const now = new Date().toLocaleString('de-DE');
    console.log(`[${now}] PostCSS Build gestartet`);
  },
  OnceExit() {
    const now = new Date().toLocaleString('de-DE');
    console.log(`[${now}] PostCSS Build abgeschlossen\n`);
  }
};

export default {
  plugins: [
    tailwindcss,
    buildLogger
  ]
};
