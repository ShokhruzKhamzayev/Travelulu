'use strict'

ScrollReveal({
    reset: false,
    distance: "60px",
    duration: 2500,
    delay: 100,
  });

  ScrollReveal().reveal("main", { delay: 100, origin: "bottom" });
  ScrollReveal().reveal(".plan-link", { delay: 300, origin: "left", interval: 500});
  ScrollReveal().reveal(".info", { delay: 100, origin: "right", interval: 500});
  ScrollReveal().reveal(".starter-sections", { delay: 100, origin: "bottom", interval: 500});
  ScrollReveal().reveal(".same-headers", { delay: 100, origin: "top", interval: 500});
  ScrollReveal().reveal(".tool", { delay: 100, origin: "bottom", interval: 200});
  ScrollReveal().reveal(".benefits", { delay: 100, origin: "top", interval: 100});
  ScrollReveal().reveal(".info", { delay: 100, origin: "right", interval: 500});
  ScrollReveal().reveal("footer", { delay: 100, origin: "top"});
  ScrollReveal().reveal(".for-more-info", { delay: 100, origin: "bottom"});





const spinnerLeft = document.querySelector('.leftBtn'),
    spinnerRight = document.querySelector('#btn'),
    spinnerLeftTwo = document.querySelector('.another-left'),
    spinnerRightTwo = document.querySelector('#another-right'),
    navActiver = document.querySelector('.name-nav'),
    navActiverTwo = document.querySelector('.another'),
    fullNavActiver = document.querySelector('#for-nav'),
    canceler = document.querySelector('.canceler'),
    cancelers = document.querySelectorAll('.nav-closer');
let valueDisplays = document.querySelectorAll('.num'),
  interval = 1;

valueDisplays.forEach((valueDisplay) => {
    let starValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'))
    console.log(endValue);
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function() {
        starValue += 1;
        valueDisplay.textContent = starValue
        if(starValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})

spinnerLeft.addEventListener('click', ()=> {
    document.querySelector('.pic-spinner').scrollLeft -= 300;
})

spinnerRight.addEventListener('click', ()=> {
    document.querySelector('.pic-spinner').scrollLeft += 300;
})

spinnerLeftTwo.addEventListener('click', ()=> {
    document.querySelector('.rates').scrollLeft -= 300;
})

spinnerRightTwo.addEventListener('click', ()=> {
    document.querySelector('.rates').scrollLeft += 300;
})

navActiver.addEventListener('click', ()=> {
    document.querySelector('.child-nav').classList.toggle('activer')
})

navActiverTwo.addEventListener('click', ()=> {
    document.querySelector('.another-child').classList.toggle('activer')
})

fullNavActiver.addEventListener('click', ()=> {
    document.querySelector('.navbar').classList.add('activer')
})

cancelers.forEach(item => {
    item.addEventListener('click', ()=> {
        document.querySelector('.navbar').classList.remove('activer')
    })
})

canceler.addEventListener('click', ()=> {
    document.querySelector('.navbar').classList.remove('activer')
})