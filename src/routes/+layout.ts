export const prerender = true;
export const ssr = true;

// Add SEO metadata
export function load() {
    return {
        title: "Andrew Rubenstein - Frontend Developer",
        description: "Take a stroll through the digital garden cared for by Andrew Rubenstein - you're friendly neighborhood frontend engineer.",
        icon: { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
       
    }
}