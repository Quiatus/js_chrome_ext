const inputBtn = document.querySelector('#input-btn');
const inputEl = document.getElementById('input-el');
let myLeads = [];

function btnClick() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
}

inputBtn.addEventListener('click',btnClick);