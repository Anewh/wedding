import '../stylesheets/main.css';
// external js: flickity.pkgd.js

import $ from 'jquery'
$(document).ready(function(){
  
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const scrollContainer = document.querySelector('.list');
    const testOutput = document.querySelector('#output');
    
    prevBtn.onclick = () => {
      scrollContainer.scrollBy({
        top: 0,
        left: -100,
        behavior: "smooth",
        selectedAttraction: 0.01,
        friction: 0.15
      }) 
    };
    
    nextBtn.onclick = () => {
      scrollContainer.scrollBy({
        top: 0,
        left: +100,
        behavior: "smooth",
        selectedAttraction: 0.01,
        friction: 0.15
      }) 
    };
    
    scrollContainer.addEventListener("scrollend", () => {
      if(scrollContainer.scrollLeft === 0) {
        prevBtn.disabled = true;
        return;
      }
      
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth
      
      if(scrollContainer.scrollLeft === maxScrollLeft) {
        nextBtn.disabled = true;
        return;
      }
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    });
  });


// Удалить после появления ссылки на галлерею, добавить в ссылку galleryLink href на облако с фотками
$('#galleryLink').on('click', function() {

  $('#galleryLink').removeClass('button');
  $('#galleryLink').removeClass('button-neo-white');
  $('#galleryLink').addClass('little-text');
  $('#galleryLink').text("Потерпите ♡");

  console.log($(this).attr('href'));
});
