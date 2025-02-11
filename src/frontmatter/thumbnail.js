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
	const url = `https://wp1.hollowaystorage.com.au/wp-json/wp/v2/media/?include=1661`;
	const response = await fetch(url);
	console.log(response.status);
	const data = await response.json();

	return data[0].link;
};
