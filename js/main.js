$(document).ready(function(){
  $(".owl-carousel-1").owlCarousel({
    items: 5,
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        900: {
            items: 5
        }
    }
  });
  $(".owl-carousel-2").owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        900: {
            items: 3
        },
    }
  });
});
