ymaps.ready(init);
function init(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(gotPosition, positionFailed)
    }
    function gotPosition(position) {
        return position
    }
    function positionFailed() {

    }
    const myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 10
    });
    myMap.controls
        .remove('searchControl')
        .remove('trafficControl')
        .remove('typeSelector')
        .remove('fullscreenControl')
        .remove('rulerControl')
}
