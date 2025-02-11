// Get Yoast SEO meta description for the post
module.exports = (post) => {
	if (!post.data.postmeta.find((meta) => meta.meta_key[0] === '_yoast_wpseo_metadesc')) {
		return;
	}
	
	return post.data.postmeta.find((meta) => meta.meta_key[0] === '_yoast_wpseo_metadesc').meta_value[0];
};
