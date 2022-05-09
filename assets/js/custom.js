/*==
custom-jquery index
01. counter-section
02. video popup
03. ScrollToptoBottom
04. Hover Effect
05. Testmonial-slider
06. Carousel-slider
==*/
$( function() {
    $( "#accordion" ).accordion();
} );

$(document).ready(function () {

    /*=====================================================================
    ==========================  01-counter-section  =========================
    ========================================================================*/

    $('.digit-value').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    /*=====================================================================
    ==========================  02-popup-youtube  =========================
    ========================================================================*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


    /*=====================================================================
    ==========================  03-ScrollToptoBottom  =========================
    ========================================================================*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });


    /*=====================================================================
    ========================== 04-Hover Effect  =========================
    ========================================================================*/
    $('.btn-custom, .add-boxCustom, .customiz-link>li>a, .a-venir').hover(function () {
        $(this).toggleClass('animated pulse');
    });

    $('.adhesion-btn').click(function () {
        $('.firstPopup').addClass('show');

        setTimeout(function () {
            $('.blur-hide').css('filter', 'blur(0px)');
        }, 500);

    });

    $('.don-libre').click(function () {
        $('.secondPopup').addClass('show');

        setTimeout(function () {
            $('.blur-hide').css('filter', 'blur(0px)');
        }, 500);
    });

    $('.membre-reseau').click(function () {
        $('.bottom-popup-custom').addClass('show');

        setTimeout(function () {
            $('.blur-hide').css('filter', 'blur(0px)');
        }, 500);
    });

    $('.validez-btn').click(function () {
        $('.thirdPopup').addClass('show');
        $('.firstPopup').removeClass('show');
        $('.secondPopup').removeClass('show');

        setTimeout(function () {
            $('.blur-hide').css('filter', 'blur(0px)');
        }, 500);
    });

    $('.close-big').click(function () {
        $('.bottom-popup').removeClass('show');
        $('.bottom-popup-custom').removeClass('show');

        setTimeout(function () {
            $('.blur-hide').css('filter', 'blur(4px)');
        }, 500);
    });


    /*=====================================================================
   ========================== 06- carousel-slider =========================
   ========================================================================*/

    $(function () {
        $('a[href="#search"]').on("click", function (event) {
            event.preventDefault();
            $("#search").addClass("open");
            $('#search > form > input[type="search"]').focus();
            setTimeout(function () {
                $('body').addClass("hiddenOverflow");
            }, 500);

        });

        $("#search, #search button.close").on("click keyup", function (event) {
            if (
                event.target == this ||
                event.target.className == "close" ||
                event.keyCode == 27
            ) {
                $(this).removeClass("open");
                $('body').removeClass("hiddenOverflow");
            }
        });

        $("form").submit(function (event) {
            event.preventDefault();
            return false;
        });
    });

    $(function () {
        $('.hamburger').on("click", function (event) {
            event.preventDefault();

            $(this).toggleClass("is-active");

            //$(".main-menu").toggleClass("show-menu");
            $(".right-section").toggleClass("navebar-show");

            $(".left-section").toggleClass("navebar-show");

            setTimeout(function () {
                $('body').toggleClass("hiddenOverflow");
            }, 300);

        });

        $('.navbar-menu a').on('mouseover', function () {
            $(this).parent().siblings().not(this).addClass("opacity-custom");
        });
        $('.navbar-menu a').on('mouseout', function () {
            $(this).parent().siblings().not(this).removeClass("opacity-custom");
        });
    });

    /*=====================================================================
    ========================== 06- carousel-slider =========================
    ========================================================================*/
    if ($(".video").length) {
        $(".video").each(function () {
            $('video', $(this)).get(0).play();

            $('video', $(this)).on("play", function () {
                this.currentTime = 39;
            });
        });

        $('.vdo').on('loadstart', function (event) {
            $(this).addClass('loading');
        });
        $('.vdo').on('canplay', function (event) {
            $(this).removeClass('loading');
        });
    }
    /*$(".popup-youtube").on("mouseover", function (event) {
        $('video', this).get(0).play();

        $("video").on("play", function () {
            this.currentTime = 39;
        });

    }).on('mouseout', function (event) {
        $('video', this).load();f
    });*/


    /*=====================================================================
    ========================== 05- Testmonial-slider =========================
    ========================================================================*/
    // var feedbackSlider = $('.feedback-slider');

    $('.feedback-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        navText: ["<img src='assets/img/angle-left.png' class='img-responsive' />", "<img src='assets/img/angle-right.png' class='img-responsive' />"],
        responsive: {

            // breakpoint from 767 up
            767: {
                nav: true,
                dots: false
            }
        }
    });

});


/*=====================================================================
    ========================== 06- increseANDdecrease Value =========================
    ========================================================================*/
$(document).ready(function () {
    $('input[type=number][max]:not([max=""])').on('input', function (ev) {
        var $this = $(this);
        var maxlength = $this.attr('max').length;
        var value = $this.val();
        if (value && value.length >= maxlength) {
            $this.val(value.substr(0, maxlength));
        }
    });


    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $('#r11').on('click', function () {
        $(this).parent().find('a').trigger('click');
    });

    $('#r12').on('click', function () {
        $(this).parent().find('a').trigger('click');
    });

    $('#r13').on('click', function () {
        $(this).parent().find('a').trigger('click');
    });
});


$( function() {
    $( "#accordion" ).accordion();
} );


// scroll-on-click slide
const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
    button.addEventListener("click", () => {
        var id = button.getAttribute("id");

        var layerClass = "." + id + "-layer";
        var layers = document.querySelectorAll(layerClass);
        for (const layer of layers) {
            layer.classList.toggle("active");
        }
    });
}


$('.adhesion-btn, .don-libre').click(function () {
    $('html, body').animate({
        scrollTop: $(".bottom-popup").offset().top
    }, 1000);
});


var length = $('.pagination').children('li').length;
if ( length == 1 ) {
    $('.pagination').css("display","none");
}else{
    console.log("Does exists pagination!!");
}

/*$("thirdPopup.show" ).ready(function() {
    $('html, body').animate({
        scrollTop: $(".thirdPopup").offset().top
    }, 1000);
});*/

var invalidChars = ["-", "e", "+", "E"];

$("input[type='number']").on("keydown", function(e){
    if(invalidChars.includes(e.key)){
        e.preventDefault();
    }
});



/*=====================================================================
    ========================== 07- home-page prellex-slider =========================
    ========================================================================*/
$(document).ready(function () {
    $('.right_section .col-md-4').eq(0).hover(function () {
        $('.carousel-inner .carousel-inner__slide').eq(0).toggleClass('show');
    });

    $('.right_section .col-md-4').eq(1).hover(function () {
        $('.homeSliderSection').toggleClass('bg-blue').toggleClass('bg-light-one');
        $('.carousel-inner .carousel-inner__slide').eq(1).toggleClass('width0 show');
        $('.carousel-inner .carousel-inner__slide').eq(0).toggleClass('width0 txtHide');
    });

    $('.right_section .col-md-4').eq(2).hover(function () {
        $('.homeSliderSection').toggleClass('bg-blue').toggleClass('bg-light');
        $('.carousel-inner .carousel-inner__slide').eq(2).toggleClass('width0 show');
        $('.carousel-inner .carousel-inner__slide').eq(0).toggleClass('width0 txtHide');

    });

    $('.sliders').slick({
        dots: true,
    });
});

if($(window).width() >= 768) {
    $(".right_section .border-box").mouseover(function () {
        $(".carousel-inner__slide.show .slide-dtext h3").css('transform', 'translateX(0px)');
    }).mouseout(function () {
        $(".carousel-inner__slide.show .slide-dtext h3").css('transform', 'translateX(10px)');
    });
}
/*=====================================================================
    ========================== 07- home-page prellex-slider =========================
    ========================================================================*/

$(document).ready(function () {

    $('#myCarousel').on('slid.bs.carousel', function () {
        $('.carousel-inner .item.active').each(function () {
            if ($(this).hasClass('active')) {
                var imageUrl = $(this).css('background-image');
                console.log(imageUrl);
                $(this).parent().css('background-image', imageUrl);
            }
        });
    });
});


var selectParents = $('.carousel-inner');
var curId = 0;
selectParents.addClass('slide-' + curId);

$('#myCarousel').on('slid.bs.carousel', function () {
    var newId = $(this).find('li.active').attr('data-slide-to');
    if (newId != curId) {
        selectParents.removeClass('slide-' + curId).addClass('slide-' + newId);
        curId = newId;
    }
});
