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
});
