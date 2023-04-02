var outerSquare = document.querySelector('body');
var text = document.querySelector('.textcoord');

outerSquare.addEventListener('mousemove', function(event) {
  var x = event.clientX - outerSquare.getBoundingClientRect().left;
  var y = event.clientY - outerSquare.getBoundingClientRect().top;
  text.textContent = 'X=' + x + ', Y=' + y;
});