$(document).ready(function () {
    $('.slider').slider();
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false,
        hover: false,
        gutter: 0,
        belowOrigin: true,
        alignment: 'left',
        stopPropagation: false
    });
    $('select').material_select();
});
// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
$(document).ready(function () {
    $('.modal').modal();
});
