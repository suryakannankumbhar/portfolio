const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    if (toggle.checked) {
        console.log('yes');
    } else {
        console.log('no');
    }
};
