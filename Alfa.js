
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









var vidElement = document.querySelector('video');

if (window.MediaSource) {
  var mediaSource = new MediaSource();
  vidElement.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.log("The Media Source Extensions API is not supported.")
}

function sourceOpen(e) {
  URL.revokeObjectURL(vidElement.src);
  var mime = 'video/webm; codecs="opus, vp09.00.10.08"';
  var mediaSource = e.target;
  var sourceBuffer = mediaSource.addSourceBuffer(mime);
  var videoUrl = 'droid.webm';
  fetch(videoUrl)
    .then(function(response) {
      return response.arrayBuffer();
    })
    .then(function(arrayBuffer) {
      sourceBuffer.addEventListener('updateend', function(e) {
        if (!sourceBuffer.updating && mediaSource.readyState === 'open') {
          mediaSource.endOfStream();
        }
      });
      sourceBuffer.appendBuffer(arrayBuffer);
    });
}


var vidElement = document.querySelector('video');

if (window.MediaSource) {
  var mediaSource = new MediaSource();
  vidElement.src = URL.createObjectURL(mediaSource);
  // Is the MediaSource instance ready?
} else {
  console.log("The Media Source Extensions API is not supported.")
}
