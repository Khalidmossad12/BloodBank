/* Start Navbar */
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    
    if(wScroll > 129.7){
        $('#nav-clone').addClass("is-active");
    }
    else{
        $('#nav-clone').removeClass("is-active");
    } 
  });
  /* End Navbar */

  // for nav links
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $('#main-nav li a').each(function() {
    
    if (this.href === path) {
      $(this).addClass('links_active');
      $(this).find('i').addClass('links_active');
    }
    
  });

  $('#nav-clone li a').each(function() {
    
    if (this.href === path) {
      $(this).addClass('clone_links_active');
      $(this).find('i').addClass('clone_links_active');
    }
    
  });

  $('.canv_links li a').each(function() {
    
    if (this.href === path) {
      $(this).addClass('links_active');
      $(this).find('i').addClass('links_active');
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