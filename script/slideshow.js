(function ($) {
  chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
      var image_array = message.images;
      for (var i = 0; i < image_array.length; i++) {
        console.log($('.carousel-inner'));
        $('<div class="item"><img src="' + image_array[i] + '"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
        $('<li data-target="#imageCarousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators');
      }
      $('.item').first().addClass('active');
      $('.carousel-indicators > li').first().addClass('active');
      $('#imageCarousel').carousel({
        interval: 1000,
        pause: "false"
      });
    });

  $('#playButton').click(function () {
    $('#imageCarousel').carousel('cycle');
  });
  $('#pauseButton').click(function () {
    $('#imageCarousel').carousel('pause');
  });
  $('#downloadButton').click(function () {
    var src = $('.active').find('img').attr('src');
    var link = document.createElement('a');
    link.href = src;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
})(jQuery);