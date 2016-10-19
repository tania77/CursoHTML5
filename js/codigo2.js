$(document).ready(function() {
  $('.cookie-message').cookieBar({
    closeButton: '.close'
  });
  var input = document.getElementById('datos');
  new Awesomplete(input, {
    list: ["Ada", "Java", "Javascript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
  });
});
