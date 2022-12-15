$(function () {
  $(".completed-airdrops--cards--card").slice(0, 6).show();
  $(".completed-airdrops").on('click touchstart', ".completed-airdrops--load-more--button", function (e) {
    e.preventDefault();
    $(".completed-airdrops--cards--card:hidden").slice(0, 3).slideDown();
    if ($(".completed-airdrops--cards--card:hidden").length == 0) {
      $(".completed-airdrops--load-more--button").css('visibility', 'hidden');
    }
    // $('html,body').animate({
    //   scrollTop: $(this).offset().top
    // }, 1000);
  });
});