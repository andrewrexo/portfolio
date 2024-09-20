import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// Validate slug to prevent directory traversal
		if (!/^[a-z0-9-]+$/i.test(params.slug)) {
			throw error(400, 'Invalid slug format');
		}

		const post = await import(`/src/posts/${params.slug}.md`);
		const content = post.default;

		if (!post.metadata.title || !post.metadata.date || !content) {
			throw error(404, 'Post content is incomplete');
		}

		return {
			content,
      meta: post.metadata,
		};
	} catch (err: any) {
		if (err.status === 400 || err.status === 404) {
			throw err;
		}
		console.error('Error loading post:', err);
		throw error(500, 'Failed to load post');
	}
}