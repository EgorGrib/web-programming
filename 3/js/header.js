window.addEventListener("load", () => {
    let btn = document.querySelector('.header__menu-btn');
    let list = document.querySelector('.header__menu-block');

    let _open = () => {
        list.classList.toggle('header__menu-block--active');
        btn.classList.toggle('header__menu-btn--active');
    };

    btn.addEventListener('click', () => {
        _open();
    })
});