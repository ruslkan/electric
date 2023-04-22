import $ from 'jquery';
import 'what-input';
import 'slick-carousel';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.

window.jQuery = $;
//window.$ = window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

// Slick Slider Header Hero
$('#hero').slick({
  slidesToShow: 1,
  dots: true,
  dotsClass: 'hero__dots',
  infinite: true,
  speed: 900,
  fade: true,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: false,
  adaptiveHeight: true,
  mobileFirst: true
  //zIndex: 1
});

// Slick Slider Section Testimonial
$('#testimonialCard').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 9000,
  dots: true,
  dotsClass: 'testimonial__dots',
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// ================================== //
// ===== Modal Content
// ================================== //

// Section Services Modal Content Apartment
var modalContentApartment = new Foundation.Reveal($('#modalContentApartment'), {
    showDelay: 450,
    closeOnClick: false
});

var servicesModalContentApartment = new Foundation.Tabs($('#servicesModalContentApartment'), {
    linkClass: 'modal__tabs-title',
    panelClass: 'modal__tabs-panel'
});

// Section Services Modal Content Country House
var modalContentCountryHouse = new Foundation.Reveal($('#modalContentCountryHouse'), {
    showDelay: 450,
    closeOnClick: false
});

var servicesModalContentCountryHouse = new Foundation.Tabs($('#servicesModalContentCountryHouse'), {
    linkClass: 'modal__tabs-title',
    panelClass: 'modal__tabs-panel'
});

// Section Services Modal Content Office
var modalContentOffice = new Foundation.Reveal($('#modalContentOffice'), {
    showDelay: 450,
    closeOnClick: false
});

// Section Services Modal Content Manufacturing
var modalContentManufacturing = new Foundation.Reveal($('#modalContentManufacturing'), {
    showDelay: 450,
    closeOnClick: false
});

// ================================== //
// ===== Modal Photo Gallery
// ================================== //

// Section services modal photo apartment
var modalPhotoApartment = new Foundation.Reveal($('#modalPhotoApartment'), {
  closeOnClick: false
});

$(document).on('open.zf.reveal', '#modalPhotoApartment', function () {
  $('.modal').addClass('modal_notscroll');
  $('#modalPhotoGallery', this).slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
    mobileFirst: true
  });
}).on('close.zf.reveal', '#modalPhotoApartment', function () {
  $('#modalPhotoGallery', this).slick('unslick');
});

// Section services modal photo country house
var modalPhotoCountryHouse = new Foundation.Reveal($('#modalPhotoCountryHouse'), {
  closeOnClick: false
});

$(document).on('open.zf.reveal', '#modalPhotoCountryHouse', function () {
  $('#modalPhotoGallery', this).slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
    mobileFirst: true
  });
}).on('close.zf.reveal', '#modalPhotoCountryHouse', function () {
  $('#modalPhotoGallery', this).slick('unslick');
});

// Section services modal photo office
var modalPhotoOffice = new Foundation.Reveal($('#modalPhotoOffice'), {
  closeOnClick: false
});

$(document).on('open.zf.reveal', '#modalPhotoOffice', function () {
  $('#modalPhotoGallery', this).slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
    mobileFirst: true
  });
}).on('close.zf.reveal', '#modalPhotoOffice', function () {
  $('#modalPhotoGallery', this).slick('unslick');
});

// Section services modal photo manufacturing
var modalPhotoManufacturing = new Foundation.Reveal($('#modalPhotoManufacturing'), {
  closeOnClick: false
});

$(document).on('open.zf.reveal', '#modalPhotoManufacturing', function () {
  $('#modalPhotoGallery', this).slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
    mobileFirst: true
  });
}).on('close.zf.reveal', '#modalPhotoManufacturing', function () {
  $('#modalPhotoGallery', this).slick('unslick');
});