const darkModeClass = "dark-mode"
const buttonChanger = document.getElementById("mode-selector")
const textChanger = document.getElementById("page-title")
const backgroundChanger = document.getElementsByTagName("body")[0];
const footerChanger = document.getElementsByTagName("footer")[0];

function activateall() {
    toggleClass()
    changename()
}

function toggleClass() {
    buttonChanger.classList.toggle(darkModeClass)
    textChanger.classList.toggle(darkModeClass)
    backgroundChanger.classList.toggle(darkModeClass)
    footerChanger.classList.toggle(darkModeClass)
}

function changename() {
    const Light = 'Light Mode'
    const Dark = 'Dark Mode'

    if (backgroundChanger.classList.contains(darkModeClass)) {
        buttonChanger.innerHTML = Light
        textChanger.innerHTML = Dark + " ON"
        return;
    }

    buttonChanger.innerHTML = Dark
    textChanger.innerHTML = Light + " ON"
}

buttonChanger.addEventListener("click", activateall) 