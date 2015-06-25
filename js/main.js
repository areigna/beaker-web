var currentIndex = 0;
function goTo (index, force) {
  if (!force && (index == null || index == currentIndex)) return;
  $('#screen'+currentIndex).hide();
  $('#beaker'+currentIndex).fadeOut(1000, function(){
    //light off the old dot
    $('#beaker'+index).fadeIn(1000, function(){
      $('#nav' + currentIndex).removeClass('on');
      $('#nav' + index).addClass('on');
      $('#screen'+index).show();
      currentIndex = index;
    });
    //randomly rotate iphone
    rotate( $('#iphone'), Math.random() * -70);
  });
}

function rotate (ele, degree) {
  var value = 'rotate(' + degree +'deg)';
  console.log('rotating', value);
  ele.css({
    '-ms-transform': value,
    '-webkit-transform': value,
    'transform': value
  });
}

$(document).ready(function(){
  goTo(0, true);
});
