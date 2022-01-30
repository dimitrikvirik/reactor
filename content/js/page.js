const page = {
    rootUrl: "http://pornreactor.cc",
    plusScrollY: 937,
    scrollCo: 1,
    defaultScrollCo: 1,
    currentScroll: "",
    page: $("html, body"),
    postList: $("#post_list div.postContainer"),
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
    maxY() {
        return Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - this.plusScrollY;
    },
    scrollStop() {
        this.currentScroll = ""
        this.page.stop()
    },
    scrollDown() {
        this.scrollStop()
        this.currentScroll = "down"
        let limit = this.maxY()
        let diff = Math.abs(limit - window.scrollY);
        let speed = 3000 * (diff / limit) * this.scrollCo * limit / 1000;
        $('html,body').animate({scrollTop: limit}, speed, "linear", function () {

        });
    },
    scrollTop() {
        this.scrollStop()
        this.currentScroll = "top"
        let start = window.performance.now();
        let limit = this.maxY()
        let diff = limit - Math.abs(window.scrollY - limit);
        let speed = 3000 * (diff / limit) * this.scrollCo * limit / 1000;
        console.log(speed)
        $('html,body').animate({scrollTop: 0}, speed, "linear", function () {
            let end = window.performance.now();
            console.log(end - start)
        });
    },
    returnScroll() {
        if (this.currentScroll === "down") {
            this.scrollDown()
        }
        if (this.currentScroll === "top") {
            this.scrollTop();
        }

    },
    nextPost() {

        this.page.stop()
        for (let i = 0; i < 10; i++) {
            let offsetTop = this.postList[i].offsetTop;
            if (offsetTop > window.scrollY) {
                $('html,body').animate({scrollTop: offsetTop}, 0);
                break;
            }
        }
        setTimeout(function () {
            page.returnScroll()
        }, 500)
    },
    prevPost() {
        this.page.stop()

        for (let i = 9; i >= 0; i--) {
            let offsetTop = this.postList[i].offsetTop;
            if (offsetTop < window.scrollY) {
                $('html,body').animate({scrollTop: offsetTop}, 0);
                break;
            }
        }
        setTimeout(function () {
            page.returnScroll()
        }, 500)
    },
    cumshot() {
        $(".cumshot").show()
        setInterval(function (){
            $(".cumshot").hide()
        }, 3000)
    }
};
