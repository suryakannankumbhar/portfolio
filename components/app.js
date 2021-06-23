
const chk = document.getElementById('chk');
var theme = document.getElementById('myStyleSheet');
let sheet;
var defaultTheme = '/components/light.css';
var checkToggle = 'unchecked';
var setStatus = localStorage.status;
var setTheme = localStorage.theme;
localStorage.setItem('status',checkToggle);


// setting theme from local storage
if (setTheme=="/components/dark.css"){
        theme.href = setTheme;
        setTheme='';
        chk.checked= true;
    }
else{
        theme.href = setTheme;
        setTheme='';
        chk.checked = false;
    }
    

// setting theme from toggle button
chk.addEventListener('change',()=>{
    if(chk.checked){
        sheet = '/components/dark.css';
    }else{
        sheet = '/components/light.css';

    }
    swapStyle(sheet)
    
    
    function swapStyle(sheet) {
        if (sheet == "/components/dark.css"){
            theme.href = sheet;
        }
        else{
            theme.href = sheet;
        }
        localStorage.setItem('theme',sheet)
    }
});
