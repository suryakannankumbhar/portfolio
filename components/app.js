const chk = document.getElementById('chk');
var theme = document.getElementById('myStyleSheet');
let sheet;
var setStatus = localStorage.status;
var setTheme = localStorage.theme;
var darkMode = '/components/dark.css';
var lightMode = '/components/light.css';
var checkToggle = 'unchecked';
localStorage.setItem('mode', defaultTheme);
localStorage.setItem('status', checkToggle);
var defaultTheme = '/components/light.css';

//svg dark mode initialization
//    to be filled
// setting theme from local storage
if (setTheme == '/components/dark.css') {
    theme.href = darkMode;
    chk.checked = true;
} else {
    theme.href = lightMode;
    chk.checked = false;
}

// setting theme from toggle button
chk.addEventListener('change', () => {
    if (chk.checked) {
        sheet = '/components/dark.css';
    } else {
        sheet = '/components/light.css';
    }
    swapStyle(sheet);

    function swapStyle(sheet) {
        if (sheet == '/components/dark.css') {
            theme.href = sheet;
        } else {
            theme.href = sheet;
        }
        localStorage.setItem('theme', sheet);
    }

    // Setting SVG colors
    if (localStorage.theme == '/components/dark.css') {
        //    to be filled
    } else {
        //    to be filled
    }
});

// Setting SVG colors using Local Storage
if (localStorage.theme == '/components/dark.css') {
    //    to be filled
} else {
    //    to be filled
}
