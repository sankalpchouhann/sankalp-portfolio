$(document).ready(function () {
    $('a[href="#about"]').click(function (e) {
      e.preventDefault();
      $('#about').slideDown('fast'); // You can change 'fast' to 'show()' if you want instant
      $('html, body').animate({
        scrollTop: $('#about').offset().top
      }, 400);
    });
  });
  