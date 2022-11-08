let num1 = 0;
let num2 = 0;
let msg = "";

function pega(){
    num1 = document.getElementById('Numero1').value;
    num2 = document.getElementById('Numero2').value;
}

function soma(){
    pega();
    msg = " a soma de: " + num1 + " + " + num2 + "O resultado é: " + (num1+num2);
    
}

function igual(){
    document.getElementById('Resultado').innerHTML = msg;
}

function menos(){
    pega();
    msg = " a subtração de: " + num1 + " - " + num2 + "O resultado é: " + (num1-num2); 
}

function divi(){
    pega();
    msg = " a divisão de: " + num1 + " e " + num2 + "O resultado é: " + (num1/num2); 
}

function  multi(){
    pega();
    if(num2 == 0){
        msg = "Impossível divir por zero!";
    }else{
        msg = " a multiplicação de: " + num1 + " e " + num2 + "O resultado é: " + (num1*num2); 
    }
}

function rais(){
    pega();
    if(num1 < 0){
        msg = "Impossível calcular!";
    }else{
        msg = " a raiz de: " + num1 + "O resultado é: " + Math.sqrt(num1); 
    }
}

function poten(){
    pega();
    
}
