/* SCROLL NAVBAR */
$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('#navbar').css('background-color', 'white');
        $('.nav-item').css('color', '#1189a1');
        $('#logo').attr('src', 'images/logoAzul-cortado.svg');
        $('#navbar').css('box-shadow', '0 8px 20px 0 rgb(31 38 135 / 37%)')

    } else {
        $('#navbar').css('background', 'transparent');
        $('.nav-item').css('color', '#FAFAD2');
        $('#logo').attr('src', 'images/logoAmarelo-cortado.svg');
        $('#navbar').css('box-shadow', 'none')
    }
});
