document.querySelector('#main-action').onclick = () => {
    document.querySelector('#cars').scrollIntoView({behavior: 'smooth'});
}

let buttons = document.querySelectorAll('.car-button');
for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].onclick = () => {
        document.querySelector('#price').scrollIntoView({behavior: 'smooth'});
    }
}

document.querySelector('#price-action').onclick = () => {
    if (document.querySelector('#name').value === '') {
        alert("Заповніть поле ім'я");
    } else if (document.querySelector('#phone').value === '') {
        alert("Заповніть поле телефон");
    } else if (document.querySelector('#car').value === '') {
        alert("Заповніть поле автомобіль");
    } else {
        alert("Дякуємо за заявку! Ми зв'яжемося з Вами найближчим часом!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 7) + 'px,' + ((event.clientY * 0.2) / 7) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});