//hamburguer menu
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

//carousel
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
   var options = {
        'duration': 200,
        'indicators': true,
        'fullWidth': true
    }
  var instances = M.Carousel.init(elems,options);
});

//collapsables
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
