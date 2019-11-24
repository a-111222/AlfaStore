$('.Icon ').click(function () {
    $('.nav').toggleClass('Active');
    $('.kon').toggleClass('Active');
    $('.navigation').toggleClass('Active');
    $('.al').toggleClass('animated bounceInDown');
});

$('.Icon').click(function () {
    $('.klik').toggleClass('rid')
});


$(window).on('scroll',function(){
if($(window).scrollTop()){
    $('.navigation').addClass('color')
}else{
    $('.navigation').removeClass('color')  
}
});


