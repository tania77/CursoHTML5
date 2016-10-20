$(document).ready( function() {
  var sample = 'digraph g {a -> b;}';
  var options = {
    format: 'svg'
  }
  var image = Viz(sample, options);
  var main = document.getElementById('main');
  main.innerHTML = image;
});
