$(document).ready( function() {
  var sample = 'A->B: Mensaje';
  var sample1 = 'Title: Esto es un título';
  var diagram = Diagram.parse(sample, sample1);
  diagram.drawSVG('diagram', {
    theme: 'hand'
  })
});
