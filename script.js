/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/*
    Page Loaded
*/

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Prashant Portfolio Loaded Successfully!"
        );

    }
);


/* =========================================================
   NAVIGATION ACTIVE SECTION
========================================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, " +
        ".education-card, .objective-card, " +
        ".contact-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(
    function (element) {

        observer.observe(element);

    }
);


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const backToTop =
    document.createElement("button");


backToTop.innerHTML = "↑";


backToTop.className =
    "back-to-top";


backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


document.body.appendChild(
    backToTop
);


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);