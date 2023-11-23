const inputBtn = document.querySelector('#input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ulEl');
let myLeads = [];

function btnClick() {
    myLeads.push(inputEl.value);

    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href='https://" + myLeads[i] + "' target='_blank'>"  + myLeads[i] + "</a></li>";
        listItems += `
        <li>
            <a href='https://${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
        </li>`;
    }

    ulEl.innerHTML = listItems;
    inputEl.value = "";
}

inputBtn.addEventListener('click',btnClick);