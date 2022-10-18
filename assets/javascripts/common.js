//close fullScreenCarousel by default
$('#fullScreenCarousel').hide();

//open fullScreenCarousel on click of image_1

function openCarousel(id) {
    var imageNumber = id.split("_")[1];
    $('.active').removeClass('active');
    $('#carousel_' + String(imageNumber)).addClass('active');
    $('#fullScreenCarousel').fadeIn();
}

//close fullScreenCarousel on click of close button
$('#cross_icon').click(function () {
    $('#fullScreenCarousel').fadeOut();
});
