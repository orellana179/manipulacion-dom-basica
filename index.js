const title = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const parrafoId  = document.querySelector('#parrafoId');
const input = document.querySelector('input');

console.log({
    title,
    p,
    parrafo,
    parrafoId,
    input
});

title.innerHTML = "Hello world";
title.innerText = 'Hola Mundo';

//Editar atributos
title.getAttribute('class');
title.setAttribute('class', 'titulo');

//Agregar atributos
title.classList.add('oscuro');
title.classList.remove('oscuro');

// title.classList.toggle('oscuro');
// title.classList.contains('oscuro');

input.value = '456';
const img = document.createElement('img');
img.setAttribute('src','https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wHeT?ver=80f6');
console.log(img);

parrafoId.innerHTML = '';
parrafoId.appendChild(img);
