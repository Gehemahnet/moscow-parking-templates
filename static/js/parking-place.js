function back() {
    history.back()
}

function toggleDescription() {
    let text = document.querySelector('.parking-place__description-detailed')
    let button = document.querySelector('.parking-place__button-expanding')
    text.classList.toggle('expanded')
    button.classList.toggle('active')
    button.classList.contains('active') ? button.innerHTML = 'Свернуть' : button.innerHTML = 'Раскрыть целиком'
}
function selectPhoto() {
    document.querySelector('.parking-place__photo').click()
}
function save() {

}