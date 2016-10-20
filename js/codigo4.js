$(document).ready( function() {
  var data = {
    /*labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
    series: [{
      data: [2, 4, 6, 8, 10, 12]
    }] */
    series: [60, 10, 30, 60]
  };
  var options = {
    total: 100
  }
  new Chartist.Pie('.chart', data, options);
});
