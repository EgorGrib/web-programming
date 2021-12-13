window.addEventListener("load", () => {
    let reference = document.location.href.split('/')[4].split('.')[0];
    switch(reference){
        case '':
        case 'index':
            document.querySelectorAll('nav ul li')[0].classList.add('active');
            break;
        case 'ipad':
            document.querySelectorAll('nav ul li')[1].classList.add('active');
            break;
        case 'iphone':
            document.querySelectorAll('nav ul li')[2].classList.add('active');
            break;
        case 'macbook':
            document.querySelectorAll('nav ul li')[3].classList.add('active');
            break;
        case 'watch':
            document.querySelectorAll('nav ul li')[4].classList.add('active');
            break;
    }
});