var currentIndex = 0;
function goTo (index, force) {
  if (!force && (index == null || index == currentIndex)) return;
  $('#beaker'+currentIndex).fadeOut(function(){
    //light off the old dot
    $('#beaker'+index).fadeIn(function(){
      $('#nav' + currentIndex).removeClass('on');
      $('#nav' + index).addClass('on');
      currentIndex = index;
    });
  });
}

$(document).ready(function(){
  goTo(0, true);
  //start auto transfering page
  /*
  setInterval(function(){
    goTo(currentIndex+1);
  }, 2000);
  */
});
