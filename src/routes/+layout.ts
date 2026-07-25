export const prerender = true;
export const ssr = true;

// Add SEO metadata
export function load() {
  return {
    title: 'Andrew Rubenstein - Software Engineer',
    description:
      'Software engineer who adapts quickly, takes ownership of unfamiliar systems, and works across implementation, production debugging, internal tooling, and technical support.',
    icon: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }
  };
}
