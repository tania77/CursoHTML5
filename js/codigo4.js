$(document).ready( function() {
  var sample = 'graph g {a -> b [label="1"]; b -> c [label="0"]; c -> a [label="1"]; a -> d [label="0"]; d [style=bold]; d -> d [label="0"]}';
  var options = {
    format: 'svg'
  }
  var image = Viz(sample, options);
  var main = document.getElementById('main');
  main.innerHTML = image;
});
