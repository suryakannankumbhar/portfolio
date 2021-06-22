const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const navigation = document.getElementById('navigation');
const header = document.getElementById('hero');
const section = document.querySelectorAll('#section');
const footer = document.getElementById('footer');
const topButton = document.getElementById('topButton');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    navigation.classList.toggle('active');
    header.classList.toggle('active');
    section[0].classList.toggle('active');
    section[1].classList.toggle('active');
    section[2].classList.toggle('active');
    footer.classList.toggle('active');
    topButton.classList.toggle('active');
    localStorage.setItem(toggle, 'active');
};
