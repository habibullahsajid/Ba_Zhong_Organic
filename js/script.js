$(function () {
    'use strict';
    //Slider
    var $owl = $('.owl');
    $owl.each(function () {
        var $a = $(this);
        $a.owlCarousel({
            transitionStyle: $a.attr('data-transitionstyle'),
            autoPlay: JSON.parse($a.attr('data-autoplay')),
            singleItem: JSON.parse($a.attr('data-singleItem')),
            items: $a.attr('data-items'),
            itemsDesktop: [1199, $a.attr('data-itemsDesktop')],
            itemsDesktopSmall: [992, $a.attr('data-itemsDesktopSmall')],
            itemsTablet: [797, $a.attr('data-itemsTablet')],
            itemsMobile: [479, $a.attr('data-itemsMobile')],
            navigation: JSON.parse($a.attr('data-buttons')),
            pagination: JSON.parse($a.attr('data-pag')),
            navigationText: ["", ""]
        });
    });
    //Preloader
    $(window).load(function () {
        $('.preloader i').fadeOut();
        $('.preloader').delay(500).fadeOut('slow');
        $('body').delay(600).css({'overflow': 'visible'});
    });
    //Magnific-popup
    $('.image-zoom').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });
    //Menu
    $('.navbar-toggle').on('click', function () {
        height_w();
    });
    function height_w() {
        $('.navbar-nav').css('max-height', $(window).height() - 165);
    }

    window.onresize = function () {
        height_w();
    };
    //cart dropdown
    $('.cart .dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });
    $('.category-bar a').on('click', function (e) {

        if ($('.category-bar .dropdown-menu').hasClass('display-block')) {
            $('.category-bar .dropdown-menu').removeClass('hidden-xs');
            $('.category-bar .dropdown-menu').removeClass('display-block');
            $('.category-bar .dropdown-menu').addClass('display-none');
        }
        else {
            $('.category-bar .dropdown-menu').addClass('display-block');
            $('.category-bar .dropdown-menu').removeClass('display-none');
        }
    });
    //Filter price
    $(".slider-range").slider({
        range: true,
        min: 0,
        max: 2000,
        step: 50,
        values: [500, 1000],
        slide: function (event, ui) {
            $(".slider_amount").val("$" + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " - $" + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }
    });
    $(".slider_amount").val("$" + $(".slider-range").slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " - $" + $(".slider-range").slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
});

jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());


    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("sticky-nav");
        } else {
            $(".navbar-fixed-top").removeClass("sticky-nav");
        }
    });


    // -------------------------------------------------------------
    // mobile menu
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').ucOffCanvasMenu({
            documentWrapper: '#main-wrapper',
            contentWrapper: '.content-wrapper',
            position: 'uc-offcanvas-left',    // class name
            // opener         : 'st-menu-open',            // class name
            effect: 'slide-along',             // class name
            closeButton: '#uc-mobile-menu-close-btn',
            menuWrapper: '.uc-mobile-menu',                 // class name below-pusher
            documentPusher: '.uc-mobile-menu-pusher'
        });
    }());

    // -------------------------------------------------------------
    // tooltip
    // -------------------------------------------------------------

    (function () {

        $('[data-toggle="tooltip"]').tooltip()

    }());


    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function () {


        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click', function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });

    }());

    // ------------------------------------------------------------------
    // jQuery for scroll down
    // ------------------------------------------------------------------
    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() == 0 || $(this).scrollTop() >= 100) {
                $('#toDown').fadeIn();
            } else {
                $('#toDown').fadeOut();
            }
        });

        $('#toDown').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 800}, 600);
        });

    }());


    // -------------------------------------------------------------
    // testimonialSlider
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        });

        // Navigation
        $('.prev').on('click', function () {
            $('.testimonialSlider').flexslider('prev');
            return false;
        });

        $('.next').on('click', function () {
            $('.testimonialSlider').flexslider('next');
            return false;
        })
    }());

    // Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
    //----------------------------------
    //---- Slick Slider-----------------
    //----------------------------------

    var slick_slider, settings;


    slick_slider = $('.client-logos');
    settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '',
        nextArrow: '',
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    };
    slick_slider.slick(settings);
    resetSlick(slick_slider, settings);

    slick_slider = $('.history-slider');
    settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '',
        nextArrow: '',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    slick_slider.slick(settings);
    //----------------------------------
    //---- social feed-----------------
    //----------------------------------
    // $('.social-feed-slider').socialfeed({
    //     // Facebook
    //     facebook: {
    //         accounts: ['@smashmag', '!smashmag'],  //Array: Specify a list of accounts from which to pull wall posts
    //         limit: 3,                                   //Integer: max number of posts to load
    //         access_token: '191042970944652|NGJyz1d0Kclt2XO3AyrjHmrKOHo'  //String: "APP_ID|APP_SECRET"
    //     },
    //     /*twitter:{
    //      accounts: ['@spacex'],                      //Array: Specify a list of accounts from which to pull tweets
    //      limit: 2,                                   //Integer: max number of tweets to load
    //      consumer_key: 'YOUR_CONSUMER_KEY',          //String: consumer key. make sure to have your app read-only
    //      consumer_secret: 'YOUR_CONSUMER_SECRET_KEY' //String: consumer secret key. make sure to have your app read-only
    //      },
    //      google:{
    //      accounts: ['#teslamotors'],                //Array: Specify a list of accounts from which to pull posts
    //      limit: 2,                                  //Integer: max number of posts to load
    //      access_token: 'YOUR_GOOGLE_PLUS_ACCESS_TOKEN'//String: G+ access token
    //      },*/
    //     //General Settings
    //     length: 400,                                     //Integer: For posts with text longer than this length, show an ellipsis.
    //     show_media: true,                                //Boolean: if false, doesn't display any post images
    //     media_min_width: 300,                           //Integer: Only get posts with images larger than this value
    //     template_html:                                  //String: HTML used for each post. This overrides the 'template' filename option
    //         '<article class=" facebook-post col-md-4"> \
    //             <a class="pull-left" href="{{=it.author_link}}" target="_blank"> \
    //                     <img class="media-object" src="{{=it.author_picture}}">\
    //             </a>\
    //         <i class="fa fa-facebook" aria-hidden="true"></i>\
    //         <div class="fb-content">\
    //             <h3>{{=it.author_name}}</h3>\
    //             <p>{{=it.text}}</p><br><a href="{{=it.link}}" class="btn btn-primary" target="_blank">read more</a>\
    //          </div>\
    //         </article>',
    //     date_format: "ll",                              //String: Display format of the date attribute (see http://momentjs.com/docs/#/displaying/format/)
    //     date_locale: "en",                              //String: The locale of the date (see: http://momentjs.com/docs/#/i18n/changing-locale/)
    //     callback: function () {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed
    //         var container = $('.social-feed-slider');
    //         var settings = {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             autoplay: true,
    //             autoplaySpeed: 4000,
    //             prevArrow: '',
    //             nextArrow: '',
    //             pauseOnHover: true,
    //             adaptiveHeight: true,
    //             responsive: [
    //                 {
    //                     breakpoint: 1024,
    //                     settings: {
    //                         slidesToShow: 3,
    //                         slidesToScroll: 1,
    //                     }
    //                 },
    //                 {
    //                     breakpoint: 840,
    //                     settings: {
    //                         slidesToShow: 2,
    //                         slidesToScroll: 1,
    //
    //                     }
    //                 },
    //                 {
    //                     breakpoint: 480,
    //                     settings: {
    //                         slidesToShow: 1,
    //                         slidesToScroll: 1
    //                     }
    //                 },
    //                 {
    //                     breakpoint: 320,
    //                     settings: {
    //                         slidesToShow: 1,
    //                         slidesToScroll: 1
    //                     }
    //                 }
    //             ]
    //
    //         };
    //         container.slick(settings);
    //         resetSlick(container, settings)
    //     }
    // });


    // ----------------------------------------------------------------
    // Slick Responsive reset
    // ----------------------------------------------------------------
    function resetSlick(slick_slider, settings) {
        $(window).on('resize', function () {
            if ($(window).width() < 320) {
                if (slick_slider.hasClass('slick-initialized')) {
                    slick_slider.slick('unslick');
                }
                return
            }

            if (!slick_slider.hasClass('slick-initialized')) {
                return slick_slider.slick(settings);
            }
        });
    }

}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function (e) {
    e.stopPropagation()
});