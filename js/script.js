
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

//Slider
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


  // Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());