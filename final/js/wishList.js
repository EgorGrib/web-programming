const wishForm = document.querySelector('.wish-form');
const wishInput = document.querySelector('.wish-input');
const wishItemsList = document.querySelector('.wish-items');
const template = document.querySelector('#task');
let wishes = [];

wishForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addWish(wishInput.value);
});

function addWish(item) {
    if (item !== '') {
        const wish = {
            id: Date.now(),
            name: item,
            completed: false
        };

        wishes.push(wish);
        addToLocalStorage(wishes);

        wishInput.value = '';
    }
}

function renderWishes(wishes) {
    wishItemsList.innerHTML = '';

    wishes.forEach(function(item) {
        const clone = template.content.cloneNode(true);
        const li = clone.querySelector('.item');
        const wishName = clone.querySelector('.wish-name');

        li.setAttribute('data-key', item.id);

        if (item.completed === true) {
            li.classList.toggle('checked');

        }
        wishName.innerHTML = item.name;
        const checkbox = clone.querySelector('.checkbox');
        checkbox.addEventListener('click', (event) => {
                toggle(event.target.parentElement.getAttribute('data-key'));
            }
        );
        const del = clone.querySelector('.delete-button');
        del.addEventListener('click', (event) => {
                deleteWish(event.target.parentElement.getAttribute('data-key'));
            }
        );

        wishItemsList.appendChild(clone);
    });

}

function addToLocalStorage(wishes) {
    localStorage.setItem('wishes', JSON.stringify(wishes));
    renderWishes(wishes);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('wishes');

    if (reference) {
        wishes = JSON.parse(reference);
        renderWishes(wishes);
    }
}

function toggle(id) {
    wishes.forEach(function(item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });

    addToLocalStorage(wishes);
}

function deleteWish(id) {
    wishes = wishes.filter(function(item) {

        return item.id != id;
    });

    addToLocalStorage(wishes);
}

getFromLocalStorage();