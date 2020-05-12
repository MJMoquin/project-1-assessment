const addNum = document.getElementById('add');
const subNum = document.getElementById('minus');
const inputEl = document.querySelector('input');
const resetBtn = document.getElementById('resetInput');
const resetAllBtn = document.getElementById('resetAll');

let result;

addNum.addEventListener('click', function() {
    result =  Number(output.innerText) + Number(inputEl.value);
    render();
})

subNum.addEventListener('click', function() {
    result = Number(output.innerText) - Number(inputEl.value);
    render();
})

resetBtn.addEventListener('click', function() {
    inputEl.value = 1;
    render();
})

resetAllBtn.addEventListener('click', function() {
    inputEl.value = 1;
    result = 0;
    render();
})

function init() {
    result = 0;
    inputEl.value = 1;
    render();
}
 
function render(){
    output.innerText = result;
    if (result > 0) {
        output.style.color = 'green';
    }
    else if (result < 0) {
        output.style.color = 'red';
    }
    else {
        output.style.color = 'black';
    }
}