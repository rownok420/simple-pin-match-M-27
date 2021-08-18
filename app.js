function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin
    }else{
        return getPin()
    }
}

function genetatePin(){
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }else{
        const prevNumber = calcInput.value;
        const newCalc = prevNumber + number;
        calcInput.value = newCalc;
    }
    
})

function verifyPin(){
    const currenPin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(currenPin == typeNumber){
        // console.log(successMessage)
        successMessage.style.display = 'block';
        failError.style.display = 'none';

    }else{
        // console.log(failError)
        failError.style.display = 'block';
        successMessage.style.display = 'none';

    }
}