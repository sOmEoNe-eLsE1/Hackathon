$(document).ready(function() {
    $('.diet-button input[type="checkbox"]').change(function() {
        if ($(this).is(':checked')) {
            $(this).next('.btn').addClass('active');
        } else {
            $(this).next('.btn').removeClass('active');
        }
    });
});