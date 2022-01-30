console.clear()
$(window).on('load', function () {
    setTimeout(removeLoader, 500);

    chrome.storage.sync.get(['currentScroll'], function (scroll) {
        if (scroll.currentScroll === 'down') {
            page.scrollDown()
        }
    })

    let $body = $("body")
    // let image = document.createElement("img");
    // image.src = "http://otakubooty.com/images/forum/post/345.gif"
    // image.className = "cumshot"
    // image.width = 1000
    // image.style = " transform: rotate(30deg) scaleX(-1); left: 80px"

    let image2 = document.createElement("img");
    image2.src = "http://otakubooty.com/images/forum/post/345.gif"
    image2.className = "cumshot"
    image2.width = 1000
    image2.style = "right: 25%; transform: rotate(-100deg) scale(-1, -1)"


    let image3 = document.createElement("img");
    image3.src = "https://i.imgur.com/SKLnJp5.gif"
    image3.className = "handjob"
    image3.width = 1000
    image3.style =  " transform: rotate(-30deg); left: 20%"

    //
    // let image4 = document.createElement("img");
    // image4.src = "https://i.imgur.com/SKLnJp5.gif"
    // image4.className = "handjob"
    // image4.width = 1000
    // image4.style = ""
    //
    // $body.append(image4)

    // $body.append(image)
   $body.append(image2)

    $body.append(image3)


    $("html").keydown(function (event) {
        switch (event.keyCode) {
            case 13:
                page.scrollStop()
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
            case  98:
                page.nextPost();
                break
            case  104:
                page.prevPost();
                break;
            case 16:
                page.cumshot()
                break
        }
    })

})