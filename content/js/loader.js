$('html').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');

function removeLoader() {
    $("#loadingDiv").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $("#loadingDiv").remove(); //makes page more lightweight
    });
    $("html").css("overflow", "visible")
}
