$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scroll = $(this).scrollTop()
    
    const $position1 = $('.art1');
    const $position2 = $('.art2');
    const $position3 =  $('.art3');
    const $position4 = $('.art4');
    const $position5 = $('.op1');
    const $position6 = $('.op2');

    const heightOfArt1 = $position1.height();
    const heightOfArt2 = $position2.height();
    const heightOfArt3 = $position3.height();
    const heightOfArt4 = $position4.height();
    
    
    const fullDistance1 =  $position1.offset().top
    const fullDistance2 =  $position2.offset().top
    const fullDistance3 =  $position3.offset().top
    const fullDistance4 =  $position4.offset().top
    const fullDistance5 =  $position5.offset().top
    const fullDistance6 =  $position6.offset().top

    

    if(scroll < fullDistance1 + heightOfArt1 - windowHeight){ //div 1
        $position2.removeClass('active');
        $position3.removeClass('active');
        $position4.removeClass('active');
        $position5.removeClass('active');
        $position6.removeClass('active');
    }

    if(scroll > fullDistance2 + heightOfArt2 - windowHeight){ //div 2
        $position2.addClass('active');
    }

    if(scroll>fullDistance3 + heightOfArt3 -windowHeight){ //div 3
        $position3.addClass('active');
    }

    if(scroll >  fullDistance4 + heightOfArt4 - windowHeight) {// div 4
        $position4.addClass('active');
        }
  
    if(scroll > fullDistance5 - windowHeight){//  picture 1 
        $position5.addClass('active');
    }
    
    if(scroll > fullDistance6 - windowHeight){// picture 2
        $position6.addClass('active');
    }
})