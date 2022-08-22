/* SCROLL NAVBAR */
var nav = document.querySelector('nav');
var imgNav = document.getElementById('logoImg');
var li = document.querySelector("ul > li:nth-child(1) > a");
var li2 = document.querySelector("ul > li:nth-child(2) > a");
var li3 = document.querySelector("ul > li:nth-child(3) > a");
var li4 = document.querySelector("ul > li:nth-child(4) > a");
var li5 = document.querySelector("ul > li:nth-child(5) > a");

      
    window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                nav.classList.add('bg-white', 'shadow');
                nav.style.transition = "all 0.8s";

                logoImg.setAttribute('src', 'images/logoAzul-semSlogan.svg')
                logoImg.style.transition = "all 1s";


                li.style.color = "#1189A1";
                li2.style.color = "#1189A1";
                li3.style.color = "#1189A1";
                li4.style.color = "#1189A1";
                li5.style.color = "#1189A1";

            } else {
                nav.classList.remove('bg-white', 'shadow');
                nav.style.transition = "all 0s";

                logoImg.setAttribute('src', 'images/logoAmarelo-cortado.svg');
                logoImg.style.transition = "all 1s";
                
                li.style.color ="#FAFAD2";
                li2.style.color ="#FAFAD2";
                li3.style.color ="#FAFAD2";
                li4.style.color ="#FAFAD2";
                li5.style.color ="#FAFAD2";
            }
        });