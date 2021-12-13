document.addEventListener('DOMContentLoaded', loadPreviousTasks);

var count = 0;
let dels = document.getElementsByClassName("delete");

function loadPreviousTasks() {
    let keys = Object.keys(localStorage);
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let lineValue = localStorage.getItem(key);
        newLine(lineValue, key);
        count = key
    }

    for (let i = 0; i < dels.length; i++) {
        dels[i].onclick = function () {
            let line = this.parentElement;
            let keys = Object.keys(localStorage);
            keys.forEach(key => {
                    if (localStorage.getItem(key) === line.childNodes[0].textContent) {
                        localStorage.removeItem(key);
                        line.remove();
                    }
                }
            )
        }
    }

}

function newElement() {
    let inputValue = document.getElementById("input").value;
    count++;
    localStorage.setItem(count, inputValue);
    newLine(inputValue, count);
}

function newLine(value) {

    let ul = document.getElementById("tasks");
    let template = document.getElementById("line");
    let copy = template.content.cloneNode(true);
    copy.childNodes[1].childNodes[0].textContent = value;
    ul.appendChild(copy);
}