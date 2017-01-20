$(document).ready(function() {
  $('form').submit(function() {
    var n = $('input#number').val();
    numbers = []
    for (var i=1; i<=n; i+=1) {
      numbers[i-1]=i;
    };

    for (var i=2; i<=n; i+=1) {
      console.log(i);
      numbers.forEach(function(number) {
        if (number % i === 0 && i != number) {
          console.log(number);
          var x = numbers.indexOf(number)
          numbers.splice(x,1);
          console.log(numbers);
        };
      });
    };


    numbers.forEach(function(number) {
      $('ul').append('<li>shit'+number+"</li>");
    });
    return false;
  });
});
