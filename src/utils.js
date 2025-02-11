// Queue for processing thumbnail requests
const thumbnailQueue = [];
let isProcessingThumbnail = false;

const processThumbnailQueue = async () => {
  if (isProcessingThumbnail || thumbnailQueue.length === 0) return;
  
  isProcessingThumbnail = true;
  const { post, resolve } = thumbnailQueue.shift();

  try {
    const postmeta = post.data.postmeta.find(
      (postmeta) => postmeta.meta_key[0] === "_thumbnail_id"
    );
    
    if (postmeta) {
      const thumbnailId = postmeta.meta_value[0];
      const url = `https://wp1.hollowaystorage.com.au/wp-json/wp/v2/media/?include=${thumbnailId}`;
      console.log({thumbnailId, url});
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        const media = json[0];
        if (media) {
          resolve(media.source_url);
          await new Promise(r => setTimeout(r, 500)); // Add delay between requests
          isProcessingThumbnail = false;
          processThumbnailQueue();
          return;
        }
      } else {
        console.log({code: response.status, url});
      }
    }
    
    resolve(null);
  } catch (error) {
    console.error('Error fetching thumbnail:', error);
    resolve(null);
  }

  await new Promise(r => setTimeout(r, 500)); // Add delay between requests
  isProcessingThumbnail = false;
  processThumbnailQueue();
};

exports.getPostThumbnailUrl = async (post) => {
  return new Promise((resolve) => {
    thumbnailQueue.push({ post, resolve });
    processThumbnailQueue();
  });
};


exports.getPostFeaturedImageUrl = async (post) => {
  if (!post.data.postmeta.find((meta) => meta.meta_key[0] === '_yoast_wpseo_opengraph-image')) {
		return;
	}

	let featuredImage = post.data.postmeta.find((meta) => meta.meta_key[0] === '_yoast_wpseo_opengraph-image').meta_value[0];
  
  return featuredImage;
};
