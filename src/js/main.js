var toTop = document.querySelector('.to-top');
var iconMenu = document.querySelector('.hamburger');
var menu = document.querySelector('.nav');

iconMenu.addEventListener('click', function(event) {
  event.preventDefault();
  iconMenu.classList.toggle('hamburger--active');
  menu.classList.toggle('nav--show');
})

$(document).ready(function () {
  var offset = 1420;
  var duration = 500;

  $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
          $('.to-top').fadeIn();
      } else {
          $('.to-top').fadeOut();
      }
  });

  $('.to-top').click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, duration);
    return false;
  });
});




// SLIDER

$("#Glide").glide({
  type: "slider"
});


// Yandex map
ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map("map", {
    center: [51.53812257, 46.02565950],
    zoom: 17,
    controls: []
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark([51.53812257, 46.02565950], {
      hintContent: 'г. Саратов, ул. Кутякова, 64А',
      balloonContent: 'г. Саратов, ул. Кутякова, 64А'
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [45, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-20, -35],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
  });

  myMap.geoObjects.add(myPlacemark);
}
