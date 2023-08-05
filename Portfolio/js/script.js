// Resume download
const downloadLink = document.getElementById('download-link');
downloadLink.addEventListener('click', function (event) {
    event.preventDefault();
    const cvFileName = 'Resume.pdf';
    const cvUrl = '../img/' + cvFileName;
    const tempLink = document.createElement('a');
    tempLink.href = cvUrl;
    tempLink.download = cvFileName;
    tempLink.click();
    tempLink.remove();
});
$(document).ready(function () {
    // navbar shrink
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    // parallax js
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        }
    }
    parallaxMouse();
    // skills bar
    $(window).scroll(function () {
        var hT = $("#skill-bar-wrapper").offset().top,
            hH = $("#skill-bar-wrapper").outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - 1.4 * wH)) {
            jQuery('.skillbar-container').each(function () {
                jQuery(this).find('.skills').animate({
                    width: jQuery(this).attr('data-percent')
                }, 5000) // 5 seconds
            })
        }
    })
    // filter
    let $btns = $('.img-gallery .sortBtn .filter-btn');
    $btns.click(function (e) {
        $('.img-gallery .sortBtn .filter-btn').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $('.img-gallery .grid').isotope
            ({
                filter: selector
            })
        return false;
    })
    $('.image-popup').magnificPopup
        ({
            type: 'image',
            gallery: { enabled: true }
        })
    // owl carousel
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
    // navbar collapse 
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    })
    // scroll
    $.scrollIt({
        topOffset: -50
    })

})