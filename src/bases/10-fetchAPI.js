const apiKey = 'mYB7PL7gtNGCJhi6cllt311R46XgpsYG';

const baseURL = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`); 

baseURL
.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

})
.catch(console.warn);

