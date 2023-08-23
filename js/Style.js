function ClosePanel() {
    document.getElementById("Close").setAttribute('style', 'display: none !important');
}
function inputProp() {
    document.getElementsByClassName("inputProp").style.border = "4px solid #ff690080";
    document.getElementsByClassName("inputProp").style.borderRadius = "18px";
    document.getElementsByClassName("inputProp").style.cursor = "pointer";

}
function inputPropjs() {
    var div = document.getElementById("inputProp");

    div.style.cursor = 'pointer';
    div.onmouseover = function () {
        div.style.backgroundColor = "#ff00ff";
    };
}
$('.Carousel1').owlCarousel({
    items: 1,
    loop: true,
    responsive: {
        767: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true
        }
    }
})
$('.Carousel2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.Carousel3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
function CloseMobil() {
    document.getElementById("Open-Close").style.display = "none";
    document.getElementById("underBody").style.overflow = "scroll";
}
function OpenMobil() {
    document.getElementById("Open-Close").setAttribute('style', 'display: block !important'),
    document.getElementById("underBody").style.overflow = "hidden";
}
function cookieSettings() {
    document.getElementsByClassName("cookieSettings").style.display = "block";
}