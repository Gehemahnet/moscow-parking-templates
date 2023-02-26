
let button = document.querySelector('.scroll-button')
button.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})
window.addEventListener('scroll', toggleScrollBackButton)

function toggleScrollBackButton() {
    console.log(window.scrollY)
    if (window.scrollY> 600) {
        button.style.display = 'flex'
    } else {
        button.style.display = 'none'
    }
}
const rangeSlider = document.querySelector('.catalog__filters-range-container')
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 1600],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': [5000]
        }
    });
    let snapValues = [
        document.querySelector('#startPrice'),
        document.querySelector('#endPrice')
    ];
    rangeSlider.noUiSlider.on('update', (values, handle) => {
        snapValues[handle].innerHTML = values[handle].split('.')[0]
    })
}

function toggleFilters() {
    let filters = document.querySelector('.catalog__filters')
    let cards = document.querySelector('.catalog__cards')
    filters.classList.toggle('active')
    cards.classList.toggle('shifted')
}


function filterStations() {

}

function filterPrice() {
//     Здесь будет функция для считывания диапазона цен с ренжа и отправкой на сервер
}

const stations = ['Таганская', 'Пушкинская', 'Рижская', 'Ещё какая-то', 'Вообще крутая станция']
initializeStations()

function showStationsDropdown() {
    let dropdown = document.querySelector('.catalog__filters-dropdown')
    dropdown.classList.add('active')
    dropdown.addEventListener('click', (e) => e.stopPropagation())
}

function initializeStations() {
    let filtersNode = document.querySelector('.catalog__filters-dropdown')
    stations.sort().forEach(station => {
        let element = document.createElement('span')
        element.className = 'catalog__filters-option'
        element.innerHTML = station
        filtersNode.appendChild(element)
    })
    filtersNode.childNodes.forEach(filter => {
        filter.addEventListener('click', (e) => addTag(e))
    })
}

function addTag(e) {
    let tagList = []
    let tagNode = document.querySelector('.catalog__filters-tags')
    tagList.push(e.target.innerHTML)
    tagList.forEach(tag => {
        let button = document.createElement('button')
        button.type = 'button'
        button.className = 'catalog__filters-tag'
        button.innerHTML = tag
        tagNode.appendChild(button)
    })
    tagNode.childNodes.forEach(tag => {
        tag.addEventListener('click', removeTag)
    })
    removeTagFromList(e.target)
}

function removeTag() {

}

function addTagToList(tag) {

}

function removeTagFromList(tag) {
    if (tag.parentNode) {
        tag.parentNode.removeChild(tag)
    }
    hideStationsDropdown()
}

function hideStationsDropdown() {
    let dropdown = document.querySelector('.catalog__filters-dropdown')
    dropdown.classList.remove('active')

}

window.addEventListener('click', (e) => {
    !e.target.classList.contains('catalog__filters-select-input') && hideStationsDropdown()
})


