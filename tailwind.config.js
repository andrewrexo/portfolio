import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ['night']
  },
  plugins: [
    daisyui,
    typography,
    plugin(function ({ addVariant, matchUtilities, theme }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      // Square utility
      matchUtilities(
        {
          square: (value) => ({
            width: value,
            height: value
          })
        },
        { values: theme('spacing') }
      );
    })
  ]
};
