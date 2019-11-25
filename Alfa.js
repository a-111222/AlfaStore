
$('.Icon ').click(function () {
    $('.nav').toggleClass('Active');
    $('.kon').toggleClass('Active');
    $('.navigation').toggleClass('Active');
    $('.al').toggleClass('animated bounceInDown');
});

/*icon menue*/
$('.Icon').click(function () {
    $('.klik').toggleClass('rid')
});

/*change nav color*/
$(window).on('scroll',function(){
if($(window).scrollTop()){
    $('.navigation').addClass('color')
}else{
    $('.navigation').removeClass('color')  
}
});

    //watch hover on mobile media//
   // filter emulated events coming from touch events
   function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

watchForHover();

//start loading page//
$(window).on('load',function(){
$('.load').fadeOut(200,function(){
$('body').css("overflow","auto");
});
});
