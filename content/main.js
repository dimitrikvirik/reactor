console.clear()
const page = {
    rootUrl: "http://pornreactor.cc",
    scrollCo: 2.5,
    defaultScrollCo: 2.5,
    currentScroll: "",
    page: $("html, body"),
    getCurrentPage() {
        const url = window.location.href;
        return url.split("/")[4] ?? ""
    },
    go(selector) {
        const attr = $(selector).attr("href");
        if (attr != null) {
            document.location.href = this.rootUrl + attr
        }
    },
    goNextPage() {
        this.go(".next")
    },
    goPrevPage() {
        this.go(".prev")
    },
    scroll(heightCo) {
        let bodyHeight = this.page.height()
        var scrollCoo = page.page.scrollTop();

        var number = bodyHeight;
        let options = (scrollCoo / number);

        let toScroll;
        if (heightCo === -1) {
            options = number * (options)
            toScroll = 0;
        } else {
            options = number * (1 - options)
            toScroll = (bodyHeight - 900)
        }

        this.page.animate({scrollTop: toScroll}, options * this.scrollCo, "linear", function () {
            if (heightCo === 1) {
                page.goNextPage()
            } else {
                page.goPrevPage()
            }
        });
    },
    scrollDown() {
        if (this.currentScroll === "down") {
            this.scrollCo /= 2;
        }
        if (this.currentScroll === "top") {
            this.scrollCo = this.defaultScrollCo
        }
        this.currentScroll = "down"
        this.page.stop()
        this.scroll(1)
        chrome.storage.sync.set({'currentScroll': 'down'}, function () {
            console.log('Settings saved down');
        });

    },
    scrollTop() {
        if (this.currentScroll === "top") {
            this.scrollCo /= 2;
        }
        if (this.currentScroll === "down") {
            this.scrollCo = this.defaultScrollCo
        }
        chrome.storage.sync.set({'currentScroll': 'top'}, function () {
            console.log('Settings saved top');
        });
        this.currentScroll = "top"
        this.page.stop()
        this.scroll(-1)

    }
};


$('html').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');

function removeLoader() {
    $("#loadingDiv").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $("#loadingDiv").remove(); //makes page more lightweight
    });
    $("html").css("overflow", "visible")
}

$(window).on('load', function () {
    setTimeout(removeLoader, 500);

    chrome.storage.sync.get(['currentScroll'], function (scroll) {
        if (scroll.currentScroll === 'down') {
            page.scrollDown()
        }
    })

    $("html").keydown(function (event) {
        switch (event.keyCode) {
            case 13:
                page.page.stop();
                page.scrollCo = page.defaultScrollCo
                break;
            case 37:
                page.goPrevPage();
                break;
            case 38:
                page.scrollTop();
                break;
            case 39:
                page.goNextPage();
                break;
            case 40:
                page.scrollDown();
                break;

        }
    })

})