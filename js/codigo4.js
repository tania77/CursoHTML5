$(document).ready( function() {
  var sample = 'Cliente->Servidor: Mensaje';
  var sample1 = 'Title: Esto es un título';
  var diagram = Diagram.parse(sample1);
  diagram.drawSVG('diagram', {
    theme: 'hand'
  })
});
