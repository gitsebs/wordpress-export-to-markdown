const utils = require('../utils');
// {
// 	id: '1676',
// 	slug: 'tips-packing-fragile-dangerous-items-move',
// 	coverImageId: '1678',
// 	coverImage: undefined,
// 	type: 'post',
// 	imageUrls: [
// 		'https://hollowaystorage.com.au/wp-content/uploads/2019/02/mother-and-daughter-packing-glassware-in-boxes.jpg',
// 		'https://hollowaystorage.com.au/wp-content/uploads/2019/02/woman-packing-fragile-items-for-storage.jpg'
// 	]
// }


module.exports = async (post) => {  
  return await utils.getPostThumbnailUrl(post);
};
