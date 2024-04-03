

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    autoplay:false,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:2
        },
        1200:{
            items:2
        }
    }
});

