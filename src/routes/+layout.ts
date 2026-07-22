export const prerender = true;
export const ssr = true;

// Add SEO metadata
export function load() {
  return {
    title: 'Andrew Rubenstein - Software Engineer',
    description:
      'I build software for crypto and payment products, with a support background that helps me debug production issues, work with APIs, and build better internal tools.',
    icon: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }
  };
}
