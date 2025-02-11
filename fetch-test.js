fetch("https://wp1.hollowaystorage.com.au/wp-json/wp/v2/media/?include=1661").then(response => {
    return response.json();
}).then(data => {
    console.log(data);
})