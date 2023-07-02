const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
    console.log('ddsg')
});

closeBtn.addEventListener('click', () => {
    menu.remove('active');
});