let num1 = 0;
let num2 = 0;
let msg = "";

function pega(){
    //num1 = document.getElementById('Numero').value;
    
     num1 = document.getElementById('Numero1').value;
     num2 = document.getElementById('Numero2').value;
}

function pegaDois(){
    num2 = document.getElementById('Numero').value;
}

function soma(){
    pega();
    msg =  parseFloat(num1) + " + " + parseFloat(num2) + " =  " + (parseFloat(num1) + parseFloat(num2));
    msg = " a soma de: " + num1 + " + " + num2 + "O resultado é: " + (num1+num2);
}

function igual(){
    document.getElementById('Resultado').innerHTML = msg;
}

function menos(){
    pega();
    msg = parseFloat(num1) + " - " + parseFloat(num2) + " = " + (parseFloat(num1) - parseFloat(num2)); 
    msg = " a subtração de: " + num1 + " - " + num2 + "O resultado é: " + (num1-num2); 
}

function divi(){
    pega();
    if(num2 == 0){
        msg = "Impossível divir por zero!";
    }else{
        msg = parseFloat(num1) + " / " + parseFloat(num2) + " = " + (parseFloat(num1) / parseFloat(num2));
    }
}

function  multi(){
    pega();
    msg = parseFloat(num1) + " * " + parseFloat(num2) + " = " + (parseFloat(num1) * parseFloat(num2)); 
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
        msg = Math.sqrt(parseFloat(num1)); 

        msg = " a raiz de: " + num1 + "O resultado é: " + Math.sqrt(num1); 
    }
}

function poten(){
    pega();
    msg = "" + Math.pow(parseFloat(num1), parseFloat(num2));  
}

function seno(){
    pega();
    if((num1 < -1) || (num1 > 1)){
        msg = "O valor do seno só pode ser entre -1 e 1"
    }else{
        msg = Math.asin(parseFloat(num1));
    }
}

function coseno(){
    pega();
    if((num1 < -1) || (num1 > 1)){
        msg = "O valor do conseno só pode ser entre -1 e 1"
    }else{
        msg = Math.acos(parseFloat(num1));
    } 
}

function tangen(){
    pega();
    msg = Math.atan(parseFloat(num1));
}

function ce(){
    document.getElementById('Resultado').value = null;
    document.getElementById('Numero1').value = null;
    document.getElementById('Numero2').value = null;
}
