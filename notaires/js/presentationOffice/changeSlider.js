(function () {
    $(document).ready(function(){
        let changeSlider = new ChangeSlider();
    });
}) ();

class ChangeSlider {
    constructor() {
        this.addButtons();
    }

    addButtons() {
        $('#div-label').append('<div class="buttons-slideshow" id="button-left"><img src="images/left-arrow.png"></div>' +
            '<div class="buttons-slideshow" id="button-right"><img src="images/right-arrow.png"></div>');
        let div = $('#container-slide');
        $('.buttons-slideshow').click(function () {
            if (div[0].style.left === "" || div[0].style.left === '0px') {
                div.css({ 'left':'calc(-50vw - 300px)', 'transition-duration': '2.5s' });
            }
            else {
                div.css({ 'left' : '0px' });
            }
        });
    }
}