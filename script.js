$(document).ready(function() {
    $(window).scroll(function() {
        if (scrollY > 20) {
            $('.header').classList.add('sticky');
        } else {

        }
    })
});