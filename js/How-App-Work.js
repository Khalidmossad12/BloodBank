/* Start Media */


    $('.media').click(function(){
        //for h3
        $(this).children('.media-heading').find('h3').addClass('media-h3-active');
        $(this).siblings('.media').children('.media-heading').find('h3').removeClass('media-h3-active');
        $(this).parent('.col-md-4').siblings('.col-md-4').children('.media').find('h3').removeClass('media-h3-active');
        //for span
        $(this).children('.media-heading').find('span').addClass('media-span-active');
        $(this).siblings('.media').children('.media-heading').find('span').removeClass('media-span-active');
        $(this).parent('.col-md-4').siblings('.col-md-4').children('.media').find('span').removeClass('media-span-active');
        //for image
        let srcImg = $(this).find('img').attr('src');
        $(this).parent('.col-md-4').siblings('.col-md-4').find('.imgs').children('.main-img').hide().attr('src',srcImg).fadeIn(500);
        // for brdr
        $(this).children('.brdr').find('.brdr-ball').addClass('ball-active');
        $(this).siblings('.media').children('.brdr').find('.brdr-ball').removeClass('ball-active');
        $(this).parent('.col-md-4').siblings('.col-md-4').children('.media').find('.brdr-ball').removeClass('ball-active');
    });
/* End Media */