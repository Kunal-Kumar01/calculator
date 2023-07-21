function add(num1, num2){
    return Number(num1)+Number(num2);
}

function subtract(num1, num2){
    return Number(num1)-Number(num2);
}

function multiply(num1, num2){
    return  Number(num1)*Number(num2);
}

function divide(num1, num2){
    if(num2===0){
        return "lol";
    }
    return Number(num1)/Number(num2);
}

firstNum='';
secondNum='';
operator='';


function operate(){
    if(operator==='+'){
        return add(firstNum,secondNum);
    }
    if(operator==='-'){
        return subtract(firstNum,secondNum);
    }
    if(operator==="/"){
        return divide(firstNum,secondNum);
    }
    if(operator==='x'){
        return multiply(firstNum,secondNum);
    }
    
}


const num = document.querySelectorAll('.button')
const display = document.querySelector('.cur');
const lastDisplay = document.querySelector('.prev');
const op = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal'); 
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

num.forEach(button=> button.addEventListener('click',()=>{
    if(secondNum==='' && operator===''){
        if(firstNum!==''){
            firstNum = (firstNum*10)+Number(button.textContent);
            display.textContent=`${firstNum}`;
        }else{
            firstNum = button.textContent;
            display.textContent=`${firstNum}`;
        }
    }
    if(operator!==''){
        if(secondNum!==''){
            secondNum = (secondNum*10)+Number(button.textContent);
            temp1 = display.textContent;
            display.textContent=`${temp1}`+" "+`${secondNum}`;
        }else{
            secondNum = button.textContent;
            temp1 = display.textContent;
            display.textContent=`${temp1}`+" "+`${secondNum}`;
        }
    }
}));

op.forEach(symbol=>symbol.addEventListener('click',()=>{
    operator = symbol.textContent;
    temp = display.textContent;
    display.textContent=`${temp}`+" "+`${operator}`;
}));

equal.addEventListener('click',()=>{
    if(secondNum!==''&& firstNum!==''&& operator!==''){
        res=operate();
        display.textContent=`${res}`;
        firstNum=res;
        secondNum='';
        operator='';
    }
});

decimal.addEventListener('click',()=>{
    if(operator===''){
        firstNum = firstNum+".";
        console.log(firstNum);
        display.textContent = `${Number(firstNum)}`;
    }
});

clear.addEventListener('click',reset);
function reset(){
    firstNum='';
    operator='';
    secondNum='';
    display.textContent='';
}

