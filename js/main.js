(function () {
    "use strict";

    const urlParams = new URLSearchParams(window.location.search);
    const invitationName = urlParams.get("i");
    if (invitationName) {
        $("#invitationName").text(invitationName);
    }

    const rsvpEls = document.querySelectorAll(".RSVPLink");
    const RSVPBase = `https://wa.me/+523319404769?text=`;
    rsvpEls.forEach((rsvpEl) => {
        if (document.location.pathname.includes("es.html")) {
            rsvpEl.href = `${RSVPBase}${encodeURIComponent(
                "(edita el mensaje para asegurarte de que los nombres sean correctos) Confirmando asistencia para " +
                    invitationName +
                    " en la boda de Liz y Miko el 26 de enero \nNuestras restricciones dietéticas son:\n-\n-\n-"
            )}`;
        } else {
            rsvpEl.href = `${RSVPBase}${encodeURIComponent(
                "(edit the message to ensure names are correct) Confirming attendance for " +
                    invitationName +
                    " at the Jan. 26th wedding of Liz & Miko \nOur dietary restrictions are:\n-\n-\n-"
            )}`;
        }
    });

    const langSwitchEls = document.querySelectorAll(".lang-switch");
    langSwitchEls.forEach((langSwitchEl) => {
        langSwitchEl.href = `${langSwitchEl.href}${window.location.search}`;
    });

    window.addEventListener("click", function () {
        var audio = document.getElementById("bg-sound");

        // debugger;
        if (
            event.target.tagName !== "BUTTON" &&
            event.target.tagName !== "A" &&
            !event.target.parentNode.getAttribute("data-pswp-width") &&
            !event.target.classList.contains("pswp__item") &&
            !event.target.classList.contains("pswp__img")
        ) {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });

    var contentWayPoint = function () {
        var i = 0;
        $(".animate-box").waypoint(
            function (direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("animated-fast")
                ) {
                    i++;

                    $(this.element).addClass("item-animate");
                    setTimeout(function () {
                        $("body .animate-box.item-animate").each(function (k) {
                            var el = $(this);
                            setTimeout(
                                function () {
                                    var effect = el.data("animate-effect");
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn animated-fast");
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft animated-fast");
                                    } else if (effect === "fadeInRight") {
                                        el.addClass(
                                            "fadeInRight animated-fast"
                                        );
                                    } else {
                                        el.addClass("fadeInUp animated-fast");
                                    }

                                    el.removeClass("item-animate");
                                },
                                k * 200,
                                "easeInOutExpo"
                            );
                        });
                    }, 100);
                }
            },
            { offset: "85%" }
        );
    };

    var goToTop = function () {
        $(".js-gotop").on("click", function (event) {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $("html").offset().top,
                },
                500,
                "easeInOutExpo"
            );

            return false;
        });

        $(window).scroll(function () {
            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $(".js-top").addClass("active");
            } else {
                $(".js-top").removeClass("active");
            }
        });
    };

    // Loading page
    var loaderPage = function () {
        $(".fh5co-loader").fadeOut("slow");
    };

    // var counter = function () {
    //     $(".js-counter").countTo({
    //         formatter: function (value, options) {
    //             return value.toFixed(options.decimals);
    //         },
    //     });
    // };

    // var counterWayPoint = function () {
    //     if ($("#fh5co-counter").length > 0) {
    //         $("#fh5co-counter").waypoint(
    //             function (direction) {
    //                 if (
    //                     direction === "down" &&
    //                     !$(this.element).hasClass("animated")
    //                 ) {
    //                     setTimeout(counter, 400);
    //                     $(this.element).addClass("animated");
    //                 }
    //             },
    //             { offset: "90%" }
    //         );
    //     }
    // };

    // Parallax
    var parallax = function () {
        $(window).stellar({
            horizontalScrolling: false,
        });
    };

    $(function () {
        parallax();
        contentWayPoint();
        goToTop();
        loaderPage();
        // counter();
        // counterWayPoint();
    });
})();
