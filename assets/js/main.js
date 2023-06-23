// navabr mobile menu toggle
$('.navbar-toggler').click(function () {
    $('.fa-bars-staggered').toggleClass('fa-xmark');
});
$('.navbar-nav a').click(function () {
    $('.navbar-collapse').removeClass('show');
    $('.fa-bars-staggered').toggleClass('fa-xmark');
});

// init AOS animation
AOS.init({
    delay: 200,
});

// init slick slider
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
});

// init scrll top
$(window).scroll(function () {
    $('.back-to-top').toggleClass('d-none', $(this).scrollTop() <= 300);
});

// submit contact form
$(".contact").submit(function (e) {
    e.preventDefault();

    var userName = this.userName.value;
    var userPhone = this.userPhone.value;
    var userMessage = this.userMessage.value;

    if (userName && userPhone && userMessage) {
        $(".contact button").html("Sending Message ...");
        $(".contact .response").html("");
        $.ajax({
            url: "contact/contact.php",
            type: "POST",
            data: $(this).serialize(),
            dataType: "JSON",
            success: function (res) {
                if (res.status == 0) {
                    $(".contact .response").html("<span class='text-danger'>" + res.message + "</span>");
                } else {
                    $(".contact .response").html("<span class='text-success'>" + res.message + "</span>");
                    $(".contact").trigger("reset");
                }
                $(".contact button").html("Send your Message");
            }
        });
    } else {
        $(".contact .response").html("<span class='text-danger'>Please ensure that all the fields mentioned above are filled.</span>");
    }
});

// equal height card
// var cardGroups = [
//     '#service .card',
//     '.slider .card',
// ];

// $(cardGroups).each(function (index, groupSelector) {
//     var maxHeight = 0;
//     $(groupSelector).each(function () {
//         var currentHeight = $(this).height();
//         if (currentHeight >= maxHeight) {
//             maxHeight = currentHeight;
//         }
//     });
//     $(groupSelector).height(maxHeight);
// });
