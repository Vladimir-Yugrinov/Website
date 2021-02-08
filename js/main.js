//$(document).ready(function() {
//    $('.button[filter="wd"]').click(function(){
//        if($(this).attr('val')=='off') {
//            $('.button[filter]').attr('val', 'off');
//            $(this).attr('val', 'on');
//                $('.filter > div').hide(300);
//                $('.filter > div[filter="wd"]').show(300);
//        }
//        
//    })
//});
//
//$(document).ready(function() {
//    $('.button[filter="ud"]').click(function(){
//        if($(this).attr('val')=='off') {
//            $('.button[filter]').attr('val', 'off');
//            $(this).attr('val', 'on');
//            $('.filter > div').hide(300);
//            $('.filter > div[filter="ud"]').show(300);
//        }
//        
//    })
//});
//
//$(document).ready(function() {
//    $('.button[filter="moc"]').click(function(){
//        if($(this).attr('val')=='off') {
//            $('.button[filter]').attr('val', 'off');
//            $(this).attr('val', 'on');
//            $('.filter > div').hide(300);
//            $('.filter > div[filter="moc"]').show(300);
//        }
//        
//    })
//});
//
//$(document).ready(function() {
//    $('.button[filter="all"]').click(function(){
//        if($(this).attr('val')=='off') {
//            $('.button[filter]').attr('val', 'off');
//            $(this).attr('val', 'on');
//            $('.filter > div').show(300);
//        }
//        
//    })
//});

//Portfolio

$(document).ready(function(){
    $('.button[filter]').click(function(){
        if($(this).attr('filter')=='all'){
            if($(this).attr('val')=='off'){
                $('button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('button[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.filter > div').show(300);
            }
        } else  
            if($(this).attr('val')=='off'){
                $('.button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.button[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.filter > div').hide(300);
                var filter = $(this).attr('filter');
                $('.filter > div[filter='+filter+']').show(300);
                
            }
    })
})

//Slider

$(document).ready(function(){
    $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: 'dots-style',
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
});
})

    //Menu

$(document).ready(function(){
    $('ul.menu a[href^="#"').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('ul.menu a[href^="#"').css({'color':'#212121'});
        $(this).css({'color':'#004bee'});
        return false;
    })
    
})

$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('nav').slideToggle(500);
        $('ul.menu').css({
            'display':'flex', 'flex-direction':'column'
        })
        if($('.menu-icon').html()=='<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>')
        }
    })
})

    //Up Arrow

$(document).ready(function(){
    $(window).scroll(function(){
       if ($(this).scrollTop() != 0)
          $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });
    $('#toTop').click(function() {
       $('body,html').animate({
           scrollTop: 0
       }, 1000); 
    });
})








