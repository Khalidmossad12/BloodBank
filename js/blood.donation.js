
$(".form-floating input").focus(function(e){
    $(e.target).siblings().addClass("active");
    $(e.target).siblings().toggleClass('changed');
});
$(".form-floating input").blur(function(e){
    $(e.target).siblings().removeClass("active");
    $(e.target).siblings().toggleClass('changed');
});
$(".form-floating textarea").focus(function(e){
    $(e.target).siblings().addClass("active");
    $(e.target).siblings().toggleClass('changed');

});
$(".form-floating textarea").blur(function(e){
    $(e.target).siblings().removeClass("active");
    $(e.target).siblings().toggleClass('changed');
});
