let button = document.querySelector('.scroll-button')
button.addEventListener('click', () => {
    button.classList.toggle('active')
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})
function toggleScrollBackButton() {
    if (window.scrollY > 600) {
        button.style.display = 'flex'
    } else {
        button.style.display = 'none'
    }
}
window.addEventListener('scroll', toggleScrollBackButton)