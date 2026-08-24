// ========================================
// LOAD SAVED THEME
// ========================================

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}


// ========================================
// THEME
// ========================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", (e) => {

        e.preventDefault();

        document.body.classList.add("theme-transition");

        document.body.classList.toggle("dark-theme");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-theme")
                ? "dark"
                : "light"
        );

    });

}


// ========================================
// CONTACT PAGE
// ========================================

const contactContent =
    document.querySelector(".contact-content");

const contactOptions =
    document.querySelectorAll(".contact-option");

const contactMe =
    document.querySelector(".contact-me");


if (
    contactContent &&
    contactOptions.length &&
    contactMe
) {


    // ========================================
    // CHANGE CONTACT STATE
    // ========================================

    function setContactState(state) {

        // Store current state
        contactContent.dataset.contactState = state;


        // ------------------------------------
        // Change active option
        // ------------------------------------

        contactOptions.forEach((option) => {

            option.classList.toggle(
                "is-active",
                option.dataset.contact === state
            );

        });


        // ------------------------------------
        // Move ME
        // ------------------------------------

        contactMe.dataset.contactState = state;

    }


    // ========================================
    // CLICK CONTACT OPTION
    // ========================================

    contactOptions.forEach((option) => {

        option.addEventListener("click", (e) => {

            const state =
                option.dataset.contact;


            // MAIL currently has no destination
            if (
                state === "mail" &&
                option.getAttribute("href") === "#"
            ) {

                e.preventDefault();

            }


            setContactState(state);

        });

    });


    // ========================================
    // INITIAL STATE
    // ========================================

    // Page starts as:
    //
    // RING ME
    //
    setContactState("ring");

}


// ========================================
// MOBILE NAV
// ========================================

const mobileNavToggle =
    document.querySelector(".mobile-nav-toggle");

const mobileNav =
    document.querySelector("nav");


if (
    mobileNavToggle &&
    mobileNav
) {

    mobileNavToggle.addEventListener("click", () => {

        const isOpen =
            mobileNav.classList.toggle(
                "mobile-nav-open"
            );


        mobileNavToggle.classList.toggle(
            "nav-open",
            isOpen
        );


        mobileNavToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        mobileNavToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );

    });


    mobileNav.querySelectorAll(
        "a:not(#theme-toggle)"
    ).forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove(
                "mobile-nav-open"
            );

            mobileNavToggle.classList.remove(
                "nav-open"
            );

            mobileNavToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileNavToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });

}