$(document).ready(function() {
  $('.cookie-message').cookieBar({
    closeButton: '.close'
  });
  var input = document.getElementById('datos');
  new Awesomplete(input, {
    list: ["Ada", "Java", "Javascript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
  });
  $('#input-tags').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
      return {
        value: input,
        text: input
      }
    }
  });

  $('.editor').trumbowyg({
    lang: 'es',
    svgPath: 'icons/icons.svg'
  });
  var waypoint = new Waypoint({
    element: document.getElementById('tres'),
    handler: function(direction) {
      alert("Has llegado!");
    }
  });
});
function mensaje() {

  alert($('.editor').trumbowyg('html'));
}
