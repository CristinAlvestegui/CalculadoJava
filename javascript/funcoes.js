let num1 = 0;
let num2 = 0;
let msg = "";

function pega(){
    num1 = document.getElementById('Numero1').value;
    num2 = document.getElementById('Numero2').value;
}

function soma(){
    pega();
    num1 + num2;
    msg = " a soma de: " + num1 + " + " + 
    num2 + "O resultado é: ";
}

function igual(){
    document.getElementById('Resultado').innerHTML = msg;
}