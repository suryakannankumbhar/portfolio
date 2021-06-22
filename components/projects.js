const chk = document.getElementById('chk');
var theme = document.getElementById('myStyleSheet');
chk.addEventListener('change', () => {
    if (chk.checked) {
        theme.setAttribute('href', '/components/dark.css');
    } else {
        theme.setAttribute('href', '/components/light.css');
    }
});
