/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
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

});



/* profile.js */
class Card extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
    <section class="cursor-pointer rounded-md max-w-72 min-h-96 bg-white flex flex-col items-center drop-shadow-lg hover:scale-105 active:scale-95 transition">
        <div class='relative h-32 w-72'>
            <div class='absolute bg-sky-400 opacity-80 w-full h-full rounded-t-md'></div>
            <img loading="lazy" src="${this.getAttribute('bg-cover') ?? ''}" alt="card cover" class='w-full h-full object-cover rounded-t-md'>
        </div>
        <div class="-m-9 z-10 bg-white rounded-full"><img src="${this.getAttribute('profile-photo') ?? ''}" alt="profile image" class='w-24 h-24 rounded-full object-cover p-2' /></div>
        <div class='text-center mt-12'>
            <h1 class='mb-1 text-xl font-medium dark:text-gray-900'>${this.getAttribute(
                "name"
            )}</h1>
            <p class='text-sm text-gray-400 dark:text-gray-500'>${this.getAttribute(
                "location"
            )}</p>
        </div>
        <div class='flex gap-4 justify-around px-8 pt-4 w-full'>
            <p class='text-sm text-gray-400 dark:text-gray-500 flex flex-col items-center'><span class='mb-1 text-xl font-medium dark:text-gray-900'>${
                this.getAttribute("followers") ?? "0"
            }</span> Followers</p>
            <p class='text-sm text-gray-400 dark:text-gray-500 flex flex-col items-center'><span class='mb-1 text-xl font-medium dark:text-gray-900'>${
                this.getAttribute("following") ?? "0"
            }</span> Following</p>
        </div>
        <ul class='absolute flex gap-6 -bottom-4'>
            <li class='w-10 h-10 bg-sky-600 rounded-full grid place-items-center' title='Email'><svg viewBox="0 0 512 512" width="20" title="envelope" fill='white'>
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                </svg></li>
            <li class='w-10 h-10 bg-sky-600 rounded-full grid place-items-center' title='Website'><svg viewBox="0 0 496 512" width="20" title="globe" fill='white'>
                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                </svg></li>
        </ul>
    </section>`;
    }
}

window.customElements.define("profile-card", Card);
