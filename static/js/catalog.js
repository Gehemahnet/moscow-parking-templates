const places = [
    {
        address: "Мне-Нужна-Длинная-Улица 48, к. 1",
        station: "Китай-Город",
        price: 150,
        cover: "static/images/catalog-card.jpg",
        link: "parking-place-info.html"
    },
    {
        address: "Мне-Нужна-Длинная-Улица 48, к. 1",
        station: "Китай-Город",
        price: 150,
        cover: "static/images/catalog-card.jpg",
        link: "parking-place-info.html"
    },
    {
        address: "Мне-Нужна-Длинная-Улица 48, к. 1",
        station: "Китай-Город",
        price: 450,
        cover: "static/images/catalog-card.jpg",
        link: "parking-place-info.html"
    },
    {
        address: "Мне-Нужна-Длинная-Улица 48, к. 1",
        station: "Китай-Город",
        price: 550,
        cover: "static/images/catalog-card.jpg",
        link: "parking-place-info.html"
    },
    {
        address: "Мне-Нужна-Длинная-Улица 48, к. 1",
        station: "Китай-Город",
        price: 650,
        cover: "static/images/catalog-card.jpg",
        link: "parking-place-info.html"
    },
    {
        address: "Мне-Нужна-Длинная-Улица 48, к. 1",
        station: "Китай-Город",
        price: 2550,
        cover: "static/images/catalog-card.jpg",
        link: "parking-place-info.html"
    },
    {
        address: "Мне-Нужна-Длинная-Улица 48, к. 1",
        station: "Китай-Город",
        price: 1550,
        cover: "static/images/catalog-card.jpg",
        link: "parking-place-info.html"
    },

]
const stations = ['Таганская', 'Пушкинская', 'Рижская', 'Ещё какая-то', 'Вообще крутая станция']


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
    rangeSlider.noUiSlider.on('change', filterPrice)
}

function toggleFilters() {
    document.querySelector('.catalog__search-block-filters').classList.toggle('active')
    let filters = document.querySelector('.catalog__filters')
    let cards = document.querySelector('.catalog__cards')
    filters.classList.toggle('active')
    cards.classList.toggle('shifted')
}


function filterStations() {

}

function filterPrice() {
    let startPrice = Number(document.getElementById('startPrice').textContent)
    let endPrice = Number(document.getElementById('endPrice').textContent)
    let filteredData = places.filter(card => card.price >= startPrice && card.price <= endPrice)
    unMountCards()
    renderCards(filteredData)
}


function renderCards(data) {
    if (data) {
        let root = document.querySelector('.catalog__cards')
        data.forEach(card => {
            let place = document.createElement('a')
            place.href = card.link
            place.className = 'catalog__cards-item'
            place.innerHTML = `
              <img src="${card.cover}" alt="" class="catalog__cards-cover">
              <div class="catalog__cards-description">
                <h5 class="catalog__cards-address">
                  ${card.address}
                </h5>
                <h6 class="catalog__cards-station">${card.station}</h6>
                <p class="catalog__cards-price">${card.price} руб./час</p>
              </div>
              `
            root.appendChild(place)
        })
    } else {

    }
}
function unMountCards() {
    let root = document.querySelector('.catalog__cards')
    Array.from(root.childNodes).forEach(card => root.removeChild(card))
}
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


renderCards(places)
initializeStations()