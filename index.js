//somente pega um elemento
let main = document.querySelector('main');
let h1 = document.querySelector('#blog');
let p = document.querySelector('.conteudo');

//coleção  de html
let p1 = document.getElementById('conteudo')[0];
let p2 = document.getElementById('conteudo')[1];
p1.style.fontWeight = "bold";
p2.style.color = "red";

main.style.textAlign = "center";

//CRIAR ELEMENTO
const img = document.createElement('img');
img.src = "acotar.jpg"

const img2 = document.createElement('img');
img2.src = "acotar.jpg"

//INSERIR O ELEMENTO
let body = document.querySelector('body');

body.appendChild(img);
body.appendChild(img2);

let h2 = document.querySelector('h2');
//Remover o elemento
h2.remove();