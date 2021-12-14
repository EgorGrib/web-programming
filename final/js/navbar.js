window.addEventListener("load", () => {
    let reference = document.location.href.split('/')[4].split('.')[0];
    switch(reference){
        case '':
        case 'index':
            document.getElementsByClassName('menu-item')[0].classList.add('active-item');
            break;
        case 'iphone':
            document.getElementsByClassName('menu-item')[1].classList.add('active-item');
            break;
        case 'macbook':
            document.getElementsByClassName('menu-item')[2].classList.add('active-item');
            break;
        case 'ipad':
            document.getElementsByClassName('menu-item')[3].classList.add('active-item');
            break;
        case 'watch':
            document.getElementsByClassName('menu-item')[4].classList.add('active-item');
            break;
    }
});