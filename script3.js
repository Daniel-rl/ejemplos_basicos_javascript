const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalculo');
const pResult = document.querySelector('#result');


/*
btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    /*console.log(parseFloat(input1.value) + parseFloat(input2.value));*/
    /*const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value)

    pResult.innerText = "El resultado es " + sumaInputs;
}*/


// Esta es la segunda, así mejor que arriba
// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     event.preventDefault();
//     /*console.log(parseFloat(input1.value) + parseFloat(input2.value));*/
//     const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value)

//     pResult.innerText = "El resultado es " + sumaInputs;
// }

// Bonus
// Otra forma pero mejor es la segunda
btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    //event.preventDefault();
    /*console.log(parseFloat(input1.value) + parseFloat(input2.value));*/
    const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value)

    pResult.innerText = "El resultado es " + sumaInputs;
}
















