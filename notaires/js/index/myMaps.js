(function () {
    $(document).ready(function(){
        /* ==============================================
    GOOGLE MAP & IFRAME SCROLL OFF
    =============================================== */
        $('.box-iframe > iframe').addClass('scrolloff');
        // set the mouse events to none when doc is ready

        $('.box-iframe').on("mouseup",function(){
            // lock it when mouse up
            $(this).children('iframe').addClass('scrolloff');
        });

        $('.box-iframe').on("mousedown",function(){
            // when mouse down, set the mouse events free
            $(this).children('iframe').removeClass('scrolloff');
        });

        $('.box-iframe > iframe').mouseleave(function () {
            // because the mouse up doesn't work...
            $(this).addClass('scrolloff');
            // set the pointer events to none when mouse leaves the map area
            // or you can do it on some other event
        });
    });
}) ();