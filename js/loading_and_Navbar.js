// For loading
$(document).ready(function(){
    $('.loading img').fadeOut(1000, () => {
        $('.loading img').parent().fadeOut(2000 , () => {
            $('.loading').remove();
            $('body').css("overflow-y" , "auto");
        })
    });
});
// End

/* Start Navbar */

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();

    if(wScroll > 72.68){
        $('#navbar-clone').addClass("is-active");
    }
    else{
        $('#navbar-clone').removeClass("is-active");
    } 
});
/* End Navbar */

/* Start offcanvas links */
$('.canv_links li').click(function(){
    $(this).children('a').addClass('drop-active').find('.fa-angle-down').addClass('drop-active');
    $(this).siblings().children('a').removeClass('drop-active').find('.fa-angle-down').removeClass('drop-active');
});
/* Start offcanvas links */

/*Start fa-angle-down*/
$('.canv_links .one').click(function(){
    $('.canv_links #offcanvasNavbarDropdown .one').toggleClass("rotate");
});
$('.canv_links .two').click(function(){
    $('.canv_links #offcanvasNavbarDropdown .two').toggleClass("rotate");
});
/*End fa-angle-down*/

// for nav links
var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
// $('.navbar li a').each(function() {
  
//   if (this.href === path) {
//     $(this).addClass('Active_Links');
//     $(this).addClass('nav-before');
//     $(this).find('i').addClass('Active_Links');
//   }
  
// });

// 

$('#navbar-clone li a').each(function() {
  
  if (this.href === path) {
    $(this).addClass('Nav_Clone_Active_Links');
    $(this).find('i').addClass('Nav_Clone_Active_Links');
  }
  
});

$('.canv_links li a').each(function() {
  
  if (this.href === path) {
    $(this).addClass('Nav_Clone_Active_Links');
    $(this).find('i').addClass('Nav_Clone_Active_Links');
  }
  
});


// for BtnUp
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > 150){
        $('#btnUp').fadeIn(500);
    }
    else{
        $('#btnUp').fadeOut(500);
    }
})
$('#btnUp').click(function(){
    $('body,html').animate({scrollTop:0},1000)
})