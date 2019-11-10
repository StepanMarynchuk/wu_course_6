"use strict"

function ready() {
    let slideIndex = 0;
    let slides = document.querySelectorAll('.card');
  
    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
  
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
  
    function calcSlideNumber(num) {
      if (num < 0) {
        if (num % slides.length === 0) return 0;
  
        return slides.length + (num % slides.length);
      }
  
      return num % slides.length;
    }
    
    function switchSlide(n, order) {
      slides[n].style.display = "block";
      slides[n].style.order = order;
    }
  
    function showSlides(n) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      switchSlide(calcSlideNumber(n), 1);
      switchSlide(calcSlideNumber(n+1), 2);
      switchSlide(calcSlideNumber(n+2), 3);
    }
  }
  
  document.addEventListener("DOMContentLoaded", ready);

  //Block-11

  (function () {
    var setting = {"height":520,"width":1591,"zoom":11,"queryString":"Львів, Львовская область, Украина","place_id":"ChIJV5oQCXzdOkcR4ngjARfFI0I","satellite":false,"centerCoord":[49.83273243784637,24.012235550000014],"cid":"0x4223c517012378e2","cityUrl":"/ukraine/kozitse-287356","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"104666"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=104666';
    s.async = true;
    s.onload = function (e) {
      window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
  })();