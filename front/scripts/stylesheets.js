import '../stylesheets/main.css';
// external js: flickity.pkgd.js

import $ from 'jquery'


// Удалить после появления ссылки на галерею, добавить в ссылку galleryLink href на облако с фотками
$('#galleryLink').on('click', function() {

  $('#galleryLink').removeClass('button');
  $('#galleryLink').removeClass('button-neo-white');
  $('#galleryLink').addClass('little-text');
  $('#galleryLink').text("Потерпи ♡");
});
