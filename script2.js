const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalculo');
const pResult = document.querySelector('#result');

function btnOnClick(){
    /*console.log(parseFloat(input1.value) + parseFloat(input2.value));*/
    const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value)

    pResult.innerText = "El resultado es " + sumaInputs;
}


