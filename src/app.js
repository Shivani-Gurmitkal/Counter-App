let count = 0;
let counter = document.getElementById('counter');
let btnIncrement = document.getElementById('btnIncrement');
let btnDecement = document.getElementById('btnDecement');

function increment(){
    count = count+1;
    counter.innerText = count;
    btnIncrement.style.backgroundColor = 'green';
}

function decrement(){
    if(count > 0){
        count = count-1;
        counter.innerText = count;
        btnDecement.style.backgroundColor = 'red';
    }
}