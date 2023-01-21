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
        document.querySelector("#findGif").value = "";
    }};


// 2. Найдите форму регистрации с валидацией (задание 2 недели 18) или сверстай новую.
// При нажатии на кнопку “Отправить” отправляй данные формы в формате **JSON** на 
//  сайт (https://httpbin.org/post) через POST запрос. 

const regBtn = document.querySelector(".registrationBtn");

let errors = [];

function checkInput(input) {
    let validity = input.validity;

    if(validity.valueMissing)
        {errors.push('Поле ' + input.placeholder + ' не заполнено');}
    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения'); }
    if(validity.tooLong)
        {errors.push('Придумайте пароль покороче');}
    if(validity.tooShort)
        {errors.push('Придумайте пароль подлиннее');}
    if (password.value != checkPassword.value) 
        {errors.push('Ваши пароли не совпадают');}
    }
function check() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkInput(input)
    }
    document.querySelector('#welcomeMsg').innerHTML = errors.join('. <br>');
}

// (задание этой недели начинается здесь)
regBtn.addEventListener("click", function (event) 
{
event.preventDefault();

let user = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    checkPassword: document.querySelector("#checkPassword").value
}
fetch("https://httpbin.org/post",
{
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
})
.then (response => response.json())
.then(user => {
    console.log(user);
})
});



// 3. При нажатии на кнопку “Отправить” отправляй данные формы через объект **FormData** на
//   сайт(https://httpbin.org/post) через POST запрос.




regBtn.addEventListener("click", function (event) 
{
event.preventDefault();

fetch("https://httpbin.org/post",
{
    method: 'POST',
    body: new FormData(form),
})
.then (response => response.json())
.then(user => {
    console.log(user);
})
});