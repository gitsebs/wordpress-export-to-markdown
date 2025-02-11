// Get featured image of the post
module.exports = (post) => {
	if (!post.data.postmeta.find((meta) => meta.meta_key[0] === '_yoast_wpseo_opengraph-image')) {
		return;
	}

	let featuredImage = post.data.postmeta.find((meta) => meta.meta_key[0] === '_yoast_wpseo_opengraph-image').meta_value[0];
	if (featuredImage.startsWith('https://hollowaystorage.com.au')) {
		featuredImage = featuredImage.replace('https://hollowaystorage.com.au', 'https://wp1.hollowaystorage.com.au');
	}
	
	return featuredImage;
};
