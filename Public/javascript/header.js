//Nav Hamburger Animation
$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});


//Additional styling on collapsed navbar

var windowWidth = $(window).width();
if (windowWidth < 992) {
    $("hr.hidden").addClass("visible");
    $("div.hidden").addClass("visible");
    $("div.hidden").removeClass("hidden");
}
else {
    $("div.hidden").removeClass("visible");
    $("hr.visible").addClass("hidden");
    $("div.visible").addClass("hidden");
}


$(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        $("hr.hidden").addClass("visible");
        $("div.hidden").addClass("visible");
        $("div.hidden").removeClass("hidden");
    }
    else {
        $("div.hidden").removeClass("visible");
        $("hr.visible").addClass("hidden");
        $("div.visible").addClass("hidden");
    }
});

$(document).ready(function () {
    var links = $('.navbar ul li a');
    $.each(links, function (key, va) {
        if (va.href == document.URL) {
            $(this).addClass('active');
        }
    });
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $(".chart__bar a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function () {
    $("#phone").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});



