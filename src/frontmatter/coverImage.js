const utils = require('../utils');

// get cover image filename, previously decoded and set on post.meta
// this one is unique as it relies on special logic executed by the parser
module.exports = async (post) => {
	const coverImage = post.meta.coverImage;
	if (coverImage) {
		return coverImage;
	}

	const featuredImage = await utils.getPostFeaturedImageUrl(post);
	if (featuredImage) {
		return featuredImage;
	}

	const thumbnail = await utils.getPostThumbnailUrl(post);
	if (thumbnail) {
		return thumbnail;
	}

	return null;
};
