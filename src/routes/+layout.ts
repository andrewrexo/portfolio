export const prerender = true;
export const ssr = true;

// Add SEO metadata
export function load() {
  return {
    title: 'Andrew Rubenstein - Frontend Developer',
    description:
      'From pixels to performance, I strive to make the web more wonderful. Looking for someone to build your next project? Drop me a line.',
    icon: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }
  };
}
