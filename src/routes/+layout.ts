export const prerender = true;
export const ssr = true;

// Add SEO metadata
export function load() {
    return {
        title: "Andrew Rubenstein - Frontend Developer",
        description: "Take a stroll through Andrew's digital garden and enjoy the ramblings of your friendly neighborhood frontend engineer.",
        icon: { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
       
    }
}