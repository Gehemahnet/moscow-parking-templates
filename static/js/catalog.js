function toggleFilters() {
    let filters = document.querySelector('.catalog__filters')
    let cards = document.querySelector('.catalog__cards')
    filters.classList.toggle('active')
    cards.classList.toggle('shifted')
}

function filterStations() {

}

function filterPrice() {

}

function showStationsDropdown() {
    let dropdown = document.querySelector('.catalog__filters-dropdown')
    dropdown.classList.add('active')
}
function hideStationsDropdown() {
    let dropdown = document.querySelector('.catalog__filters-dropdown')
    dropdown.classList.remove('active')
}

window.addEventListener('click', (e) => {
    !e.target.classList.contains('catalog__filters-select-input') && hideStationsDropdown()
})