/* ============================================================
 
 Template Name: MN - Coming Soone HTML Template
 Author: Marwa El-Manawy -- http://elmanawy.info
 Description: MN - Coming Soon HTML Template.
 Version: 1.0
 
 ===============================================================
 */

/*================================================
 [  START LIST OF SCRIPTS ]
 ================================================
 :: Responsive menu
 :: Count Down
 :: Tooltip
 :: Wow animation
 :: Smooth Scroll
 :: Subscribe
 :: Contact
 :: Play/ Pause Video
 :: Back To Top
 
 ======================================
 [ End table content ]
 ======================================*/

/* ==============================================
 Responsive Menu
 =============================================== */

$(window).resize(function () {

    if ($(window).width() <= 768) {

        $('#icon').on("click", function (e) {
            $('#menu-center').show('slow');
        });
        $('#menu-center li a').on("click", function (e) {
            $('#menu-center').hide('slow');
        });
        $('#close-menu').on("click", function (e) {
            $('#menu-center').hide('slow');
        });

    }

});
/* ==============================================
 Countdown
 =============================================== */

//var newYear = new Date();
var newYear = new Date("2019/01/18");
$('.defaultCountdown').countdown({until: newYear, format: '%D days %H:%M:%S'});

$('#loader-wrapper').delay(0).fadeOut('slow');

/* ==============================================
 For Tooltip.
 =====================================================================*/

$(function () {
    $('[data-rel="tooltip"]').tooltip();
});

/* ==============================================
 For WOW Animation.
 =====================================================================*/
$(document).ready(function () {
    new WOW().init();

    /* ==============================================
     For Smooth Scroll.
     =====================================================================*/
    var $stupid = $('<div></div>')
            .height(1)
            .hide()
            .appendTo('body');

    var mobileHack = function () {
        $stupid.show();
        setTimeout(function () {
            $stupid.hide();
        }, 10);
    };

    $('ul.mainnav a').scroll(function () {
        afterScroll: mobileHack
    });



    /* ==============================================
     For Fixed Menu.
     =====================================================================*/
    var s = $("#stick_menu");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("stick_menu");
        } else {
            s.removeClass("stick_menu");
        }
    });

    /* ==============================================
     Remove Full Screen Image in Mobile view.
     =====================================================================*/
    if ($(window).width() < 514) {
        $('#head').removeClass('intro');
        $('#head').css('height', 'auto')
    } else {
        $('#head').addClass('intro');

    }

    $(window).resize(function () {
        if ($(window).width() < 1050) {
            $('#head').removeClass('intro');
            $('#head').css('height', 'auto')
        } else {
            $('#head').addClass('intro');
        }
    }).resize();


    /* ==============================================
     For Full Screen Header Part.
     =====================================================================*/

    "use strict";

    var winHeight = $(window).height();
    var winWidth = $(window).width();

    if (winWidth > 979) {
        $('.intro').css({
            'height': winHeight,
        });
    } else {
        $('.intro').css({
            'height': '536px'
        });
    }
    ;

    $(window).resize(function () {
        var winHeight = $(window).height();
        var winWidth = $(window).width();

        if (winWidth > 979) {
            $('.intro').css({
                'height': winHeight
            });
        } else {
            $('.intro').css({
                'height': '536px'
            });
        }
        ;
    });


    /* SUBSCRIBE
     ======================================*/
    $("#subscriber_form").on("submit", function (e)
    {
        $('#show_subscriber_msg').html('<div class=gen>Submiting..</div>');
        var subscriberemail = $('#subscriberemail').val();
        var formURL = $(this).attr("action");
        var data = {
            subscriberemail: subscriberemail
        }
        $.ajax(
                {
                    url: formURL,
                    type: "POST",
                    data: data,
                    success: function (res) {
                        if (res == '1') {
                            $('#show_subscriber_msg').html('<div class=gen>Thank you very much, We will notify you when we lunch</div>');
                        }

                        if (res == '5') {
                            $('#show_subscriber_msg').html('<div class=err>Please enter a valid email address</div>');
                        }
                    }
                });
        e.preventDefault();
    });

    /* SUBSCRIBE
     ======================================*/
    $("#contact_form").on("submit", function (e)
    {
        $('#show_contact_msg').html('<div class=gen>Sending Message..</div>');
        var username = $('#contact_name').val();
        var useremail = $('#contact_email').val();
        var userphone = $('#contact_phone').val();
        var commenttext = $('#contact_text').val();
        var formURL = $(this).attr("action");
        var data = {
            username: username,
            useremail: useremail,
            userphone: userphone,
            commenttext: commenttext,
        }
        $.ajax(
                {
                    url: formURL,
                    type: "POST",
                    data: data,
                    success: function (res) {
                        if (res == '1') {
                            $('#show_contact_msg').html('<div class=gen><i class="fa fa-smile-o" aria-hidden="true"></i> Thank you very much, We will notify you when we lunch</div>');
                        }

                        if (res == '5') {
                            $('#show_contact_msg').html('<div class=err><i class="fa fa-frown-o" aria-hidden="true"></i> Please enter a valid email address</div>');
                        }
                    }
                });
        e.preventDefault();
    });
});

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function ()
{
    vid.pause();
    vidFade();
});
pauseButton.addEventListener("click", function () {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = '<i class="fa fa-pause-circle-o">' + '</i>';
    } else {
        vid.pause();
        pauseButton.innerHTML = '<i class="fa fa-play-circle">' + '</i>';
    }
});

//Back To Top
jQuery(document).ready(function ($) {
    // hide #back-top first
    $("#backtotop").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#backtotop').fadeIn();
            } else {
                $('#backtotop').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#backtotop a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
});
//Back To Top /END