let count = 0;
let counter = document.getElementById('counter');
let btnIncrement = document.getElementById('btnIncrement');
let btnDecrement = document.getElementById('btnDecrement');
let btnReset = document.getElementById('btnReset');

function increment(){
    count++;
    counter.innerText = count;
    btnIncrement.style.backgroundColor = 'green';
    btnDecrement.style.backgroundColor = 'black';
}

function decrement(){
    if(count > 0){
        count--;
        counter.innerText = count;
        btnDecrement.style.backgroundColor = 'red';
        btnIncrement.style.backgroundColor = 'black';
    }
    else{
        btnDecrement.style.backgroundColor = 'black';
    }
}

function resetbutton(){
    count = 0; 
    counter.innerText = count;
    btnIncrement.style.backgroundColor = 'black';
    btnDecrement.style.backgroundColor = 'black';
}