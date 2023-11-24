const inputBtn = document.querySelector('#input-btn');
const deleteConfirm = document.querySelector('.deleteConfirm');
const clLastBtn = document.querySelector('#clear-last-btn');
const clAllBtn = document.querySelector('#clear-all-btn');
const inputEl = document.getElementById('input-el');
const saveTab = document.getElementById('save-tab');
const ulEl = document.getElementById('ulEl');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
let myLeads = [];

// Check if any leads are stored and render them 

let leads = JSON.parse(localStorage.getItem("myLeads"));
if (leads) {
    myLeads = leads;
    render(myLeads);
}

// Functions

function render(arr) {
    let listItems = "";

    for (let i = 0; i < arr.length; i++) {
        // Use string template 
        listItems += `
        <li>
            <a href='${arr[i]}' target='_blank'>
                ${arr[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems;
}

function clearAll() {
    localStorage.clear();
    myLeads = [];
    inputEl.value = "";
    render(myLeads);
}

function pushText(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
}

// Event Listeners

inputBtn.addEventListener('click',function() {
    if (inputEl.value) {
        pushText();
    }
});

inputEl.addEventListener('keypress',function(e) {
    if ((inputEl.value) && (e.key === 'Enter')) {
        pushText();
    }
});

saveTab.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
})

clLastBtn.addEventListener('click',function() {
    myLeads.pop();
    localStorage.clear();
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

clAllBtn.addEventListener('click', function() {
    deleteConfirm.classList.remove('hidden');
});

no.addEventListener('click', function(){
    deleteConfirm.classList.add('hidden');
});

yes.addEventListener('click', function(){
    clearAll();
    deleteConfirm.classList.add('hidden');
});