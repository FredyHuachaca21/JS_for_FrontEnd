const getImagen = async()=>{
    const apiKey = 'mYB7PL7gtNGCJhi6cllt311R46XgpsYG';
    const baseURL = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

    const {data} = await baseURL.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    
    img.src = url;
    document.body.append(img);

} 

getImagen();

