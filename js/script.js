
(function(){
    const header = document.querySelector('header');
    window.onscroll = () => {
        if(window.pageYOffset > 37){
            header.classList.add('-active')
        }
        else{
            header.classList.remove('-active');
        }
    }
}()); /**самовызывающаяся функция, при загрузке страницы */

//burger menu
const burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link')
const body = document.querySelector('body');
if(burger&&menu){
    burger.addEventListener('click', () =>{
        burger.classList.toggle('-active');
        menu.classList.toggle('-active');
        body.classList.toggle('_lock');
    })
    menuLinks.forEach(link => {
        link.addEventListener('click', () =>{
            burger.classList.remove('-active');
            menu.classList.remove('-active');
            body.classList.remove('_lock');
        })
    })
}





const swiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
    //slidesPerView: 'auto',
    autoHeight: true,
    simulateTouch: false,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-reviews__pagination',
      type: 'bullets',
      clickable: true,
    },
  
  });
