$(document).ready( function() {
  var sample = 'Cliente->Servidor: Mensaje \n Servidor->>Cliente: Linea con flecha hueca';
  var sample1 = 'Title: Esto es un título';
  var diagram = Diagram.parse(sample);
  diagram.drawSVG('diagram', {
    theme: 'hand'
  })
});
