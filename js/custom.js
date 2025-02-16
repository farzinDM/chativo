(function ($) {
    "use strict";

    // NAVBAR
    $(".navbar-collapse a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    $(function () {
        $(".hero-slides").vegas({
            slides: [
                {
                    src: "images/slides/0eadd2c4-dc6f-457b-9a73-011fa47bc79c.jpg",
                },
                {
                    src: "images/slides/3fc828ec-1e0c-450e-b398-c221d1193c77.jpg",
                },
                {
                    src: "images/slides/0117442f-4892-4198-9ab8-d210b21d2c9b.jpg",
                },
            ],
            timer: false,
            animation: "kenburns",
        });
    });

    // CUSTOM LINK
    $(".smoothscroll").click(function () {
        var el = $(this).attr("href");
        var elWrapped = $(el);
        var header_height = $(".navbar").height() + 60;

        scrollToDiv(elWrapped, header_height);
        return false;

        function scrollToDiv(element, navheight) {
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop - navheight;

            $("body,html").animate(
                {
                    scrollTop: totalScroll,
                },
                300
            );
        }
    });
})(window.jQuery);
