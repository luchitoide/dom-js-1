const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btn = document.querySelector('button');
const result = document.querySelector('p');

form.addEventListener('mouseover',onClick);

function onClick(e){
    e.preventDefault();
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let sum=num1+num2;
    console.log(sum);
    if (sum){
        result.innerText=sum;
    }
    else {
        console.log('sum');
        result.innerText='No es un numero';
    }
    
}