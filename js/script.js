const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  focusableElements:'blog_button,blog_name,blog_descr',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let tabsBtn = document.querySelectorAll('.tabs-nav__link');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__link--active')});
    e.currentTarget.classList.add('tabs-nav__link--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion('.accordion');

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');

    })
});

const searchHide = document.querySelector('.header_search');
const searchItems = document.querySelectorAll('.search_form');
const searchSubmit = document.querySelector('.search_btn-1');
const searchClose = document.querySelector('.search_btn-2');

searchHide.addEventListener('click', () => {
    searchItems.forEach(el => { el.classList.add('search_form--visible') });


})
searchClose.addEventListener('click',()=>{
  searchClose.forEach(el => { el.classList.add('search_form--hidden') })

})
searchSubmit.addEventListener('click',(e)=>{
  e.preventDefault();

})











