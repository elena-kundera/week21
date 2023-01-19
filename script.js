//1. Сделайте форму поиска по GIF-кам к открытому API (https://developers.giphy.com/) 
//   Используйте GET-запрос с параметрами в строке адреса. Страница должна выводить не более 5 картинок 
//одновременно.

const btn = document.querySelector("#btnFindGif");

btn.addEventListener("click", function (event)
{
const findThatGif = document.querySelector("#findGif").value;
fetch ("https://api.giphy.com/v1/gifs/search?api_key=CFrJQIOEZfFZdoLYdaKrEsPmD4nVMTs1&limit=5&q=" + findThatGif)
.then(response => response.json())
.then(gifs => {
    getGifs(gifs)
}
)});


function getGifs(a) {
    const container = document.querySelector("#gifResult");
    for (let i = 0; i < a.data.length; i++) {
        const userContainer = document.createElement('div');
        container.append(userContainer);
        const img = document.createElement('img');
        img.src = a.data[i].images.original.url;
        img.style.width = '150px';
        userContainer.append(img);
    }};