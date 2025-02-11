// Get Yoast SEO meta title for the post
module.exports = (post) => {
	if (!post.data.postmeta.find((meta) => meta.meta_key[0] === '_yoast_wpseo_title')) {
		return;
	}
	
	return post.data.postmeta.find((meta) => meta.meta_key[0] === '_yoast_wpseo_title').meta_value[0];
};
