const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafoClass = document.getElementsByClassName('parrafoClass');
const parrafoId = document.getElementById('parrafoId');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafoClass,
    parrafoId,
    input
});

h1.innerHTML = 'Perrito llamando a gatito, tienes chicles ? <br> jijiji';
h1.innerText = 'Perrito llamando a gatito, tienes chicles ? <br> jijiji';
//console.log(h1.getAttribute('pantalla'));
h1.setAttribute('class', 'azulito');
console.log(h1.getAttribute('class'));

h1.classList.add('negro');
h1.classList.remove('azulito');
// otras propiedades como:
// h1.classList.toggle('azulito'); para eventos, por ejemplo eventos de clases
// h1.classList.contains('azulito'); true o false dependiendo si el elemento tiene
//                                    o no la clase

input.value = 'Pepito Los Palotes';

// Para crear un elemento html desde cero:
const imagen = document.createElement('img');
imagen.setAttribute('src', 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(imagen);

// Adjuntamos la imagen del gatito junto con el texto del parrafo
// parrafoId.append(imagen);

//Si queremos borrar el contenido del parrafo y solo ver la imagen
parrafoId.innerHTML = "";
parrafoId.append(imagen);
