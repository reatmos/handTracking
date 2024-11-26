window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }

        const currentPage = window.location.pathname;
        const specialPage = '/service.html';

        if (currentPage === specialPage) {
            return;
        }

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const camera1 = document.getElementById('camera1');
        const camera2 = document.getElementById('camera2');
        const camera3 = document.getElementById('camera3');
        const camera4 = document.getElementById('camera4');

        const stream1 = "카메라 1 Input Path";
        const stream2 = "카메라 2 Input Path";
        const stream3 = "카메라 3 Input Path";
        const stream4 = "카메라 4 Input Path";

        camera1.src = stream1;
        camera2.src = stream2;
        camera3.src = stream3;
        camera4.src = stream4;
    });

});
