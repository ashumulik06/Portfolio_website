$(document).ready(function() {
    // 1. Certificate Modal Logic
    $('.view-cert').on('click', function() {
        const imgSrc = $(this).attr('data-img');
        $('#modalImg').attr('src', imgSrc);
        $('#certModal').fadeIn(300).css('display', 'flex');
        $('body').addClass('overflow-hidden'); // Prevent scroll
    });

    $('#closeModal, #certModal').on('click', function(e) {
        if(e.target !== $('#modalImg')[0]) {
            $('#certModal').fadeOut(200);
            $('body').removeClass('overflow-hidden');
        }
    });

    // 2. Back to Top Button Visibility
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }

        // 3. Simple Active Section Highlight
        $('section').each(function() {
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 150;
            let height = $(this).outerHeight();
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.nav-link').removeClass('active');
                $('.nav-link[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // 4. Back to top Click
    $('#backToTop').on('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
// Intersection Observer for fade-in effect
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).addClass('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});