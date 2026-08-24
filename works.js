// ========================================
// LOAD SAVED THEME
// ========================================

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}


const CAROUSEL_CONFIG = {

    // ========================================
    // SCROLL
    // ========================================

    scrollAmount: 0.35,


    // ========================================
    // MOUSE WHEEL SMOOTHING
    // ========================================

    mouseSmoothness: 0.12,


    // ========================================
    // MOMENTUM
    // ========================================

    momentum: 0.94,

    momentumAmount: 0.04,


    // ========================================
    // STOP DETECTION
    // ========================================

    debounceDelay: 160,


    // ========================================
    // SNAP
    // ========================================

    snapDuration: 450

};


// ========================================
// ELEMENTS
// ========================================

const track =
    document.querySelector(".works-track");

const worksCarousel =
    document.querySelector(".works-carousel");

const workVideo =
    document.querySelector("#work-video");

const workPoster =
    document.querySelector("#work-poster");


// ========================================
// ORIGINAL ITEMS
// ========================================

const originalItems = [
    ...document.querySelectorAll(".work-item")
];

const ITEM_COUNT =
    originalItems.length;


// ========================================
// CREATE COPIES
// ========================================

const beforeItems =
    originalItems.map(item => {

        const clone =
            item.cloneNode(true);

        clone.classList.remove(
            "is-active"
        );

        return clone;

    });


const afterItems =
    originalItems.map(item => {

        const clone =
            item.cloneNode(true);

        clone.classList.remove(
            "is-active"
        );

        return clone;

    });


// ========================================
// INSERT COPIES BEFORE
// ========================================

beforeItems
    .reverse()
    .forEach(item => {

        track.insertBefore(
            item,
            track.firstChild
        );

    });


// ========================================
// INSERT COPIES AFTER
// ========================================

afterItems.forEach(item => {

    track.appendChild(item);

});


// ========================================
// ALL ITEMS
// ========================================

const items = [
    ...track.querySelectorAll(".work-item")
];




// ========================================
// STATE
// ========================================

// Actual rendered position.
let position =
    ITEM_COUNT + 5;


// Mouse-wheel / touch destination.
let targetPosition =
    position;


// Momentum.
let velocity = 0;


// Snap target.
let snapTarget = null;


// Snap state.
let isSnapping = false;


// Debounce.
let debounceTimer = null;


// Timing.
let lastTime =
    performance.now();


// ========================================
// GET ITEM HEIGHT
// ========================================

function getItemHeight() {

    return items[0]
        .getBoundingClientRect()
        .height;

}


// ========================================
// CLEAR ACTIVE
// ========================================

function clearActive() {

    items.forEach(item => {

        item.classList.remove(
            "is-active"
        );

    });

}


// ========================================
// UPDATE POSITION
// ========================================

function updatePosition() {

    const itemHeight =
        getItemHeight();


    const offset =
        (position + 0.5) *
        itemHeight;


    track.style.transform =
        `translateY(-${offset}px)`;

}


// ========================================
// NORMALIZE LOOP
// ========================================

function normalizePosition() {

    while (
        position >=
        ITEM_COUNT * 2
    ) {

        position -= ITEM_COUNT;

        targetPosition -= ITEM_COUNT;


        if (snapTarget !== null) {

            snapTarget -= ITEM_COUNT;

        }

    }


    while (
        position <
        ITEM_COUNT
    ) {

        position += ITEM_COUNT;

        targetPosition += ITEM_COUNT;


        if (snapTarget !== null) {

            snapTarget += ITEM_COUNT;

        }

    }

}


// ========================================
// ACTIVATE CLOSEST
// ========================================

function activateClosestItem() {

    clearActive();


    const index =
        Math.round(position);


    const item =
        items[index];


    if (!item) {
        return;
    }


    item.classList.add(
        "is-active"
    );


    // ====================================
    // UPDATE POSTER
    // ====================================

    const posterURL =
        item.dataset.poster;


    if (
        posterURL &&
        workPoster
    ) {

        workPoster.src =
            posterURL;

    }


    // ====================================
    // UPDATE VIDEO
    // ====================================

    const videoURL =
        item.dataset.video;


    if (
        !videoURL ||
        !workVideo
    ) {
        return;
    }


    workVideo.src =
        videoURL;

}


// ========================================
// UPDATE POSTER / VIDEO WHILE SCROLLING
// ========================================

let currentPosterIndex = null;


function updatePosterWhileScrolling() {

    const index =
        Math.floor(
            position + 0.5
        );


    const item =
        items[index];


    if (!item) {
        return;
    }


    if (
        index ===
        currentPosterIndex
    ) {
        return;
    }


    const videoURL =
        item.dataset.video;


    if (!videoURL) {
        return;
    }


    currentPosterIndex =
        index;


    if (workVideo) {

        workVideo.src =
            videoURL;

    }

}


// ========================================
// START SNAP
// ========================================

function startSnap() {

    if (isSnapping) {
        return;
    }


    velocity = 0;


    /*
        Snap based on the VISUAL position,
        not raw wheel/touch input.
    */

    snapTarget =
        Math.round(position);


    targetPosition =
        snapTarget;


    clearActive();


    isSnapping = true;

}


// ========================================
// CANCEL SNAP
// ========================================

function cancelSnap() {

    isSnapping = false;

    snapTarget = null;

    velocity = 0;

    targetPosition =
        position;

}


// ========================================
// ANIMATION LOOP
// ========================================

function animate(currentTime) {

    const deltaTime =
        Math.min(
            currentTime - lastTime,
            32
        );


    lastTime =
        currentTime;


    // ====================================
    // FREE SCROLLING
    // ====================================

    if (!isSnapping) {

        /*
            Smoothly approach target.
        */

        const difference =
            targetPosition -
            position;


        const smoothFactor =
            1 -
            Math.pow(
                1 -
                CAROUSEL_CONFIG.mouseSmoothness,
                deltaTime / 16.67
            );


        position +=
            difference *
            smoothFactor;


        // ====================================
        // MOMENTUM
        // ====================================

        position +=
            velocity *
            (deltaTime / 16.67);


        const decay =
            Math.pow(
                CAROUSEL_CONFIG.momentum,
                deltaTime / 16.67
            );


        velocity *= decay;


        if (
            Math.abs(velocity) <
            0.0001
        ) {

            velocity = 0;

        }


        normalizePosition();

    }


    // ====================================
    // MAGNETIC SNAP
    // ====================================

    else {

        const difference =
            snapTarget -
            position;


        const snapSpeed =
            1 -
            Math.pow(
                0.001,
                deltaTime /
                CAROUSEL_CONFIG.snapDuration
            );


        position +=
            difference *
            snapSpeed;


        if (
            Math.abs(difference) <
            0.001
        ) {

            position =
                snapTarget;


            targetPosition =
                snapTarget;


            snapTarget =
                null;


            isSnapping =
                false;


            // ====================================
            // ACTIVATE CENTER ITEM
            // ====================================

            activateClosestItem();

        }

    }


    // ====================================
    // DRAW
    // ====================================

    updatePosition();

    updatePosterWhileScrolling();


    requestAnimationFrame(
        animate
    );

}


// ========================================
// INITIAL STATE
// ========================================

updatePosition();

activateClosestItem();


requestAnimationFrame(
    animate
);


// ========================================
// WHEEL INPUT
// ========================================

window.addEventListener(
    "wheel",
    (event) => {

        event.preventDefault();


        // ====================================
        // INTERRUPT SNAP
        // ====================================

        if (isSnapping) {

            cancelSnap();

        }


        // ====================================
        // CLEAR ACTIVE
        // ====================================

        clearActive();


        // ====================================
        // GET ITEM HEIGHT
        // ====================================

        const itemHeight =
            getItemHeight();


        // ====================================
        // CALCULATE MOVEMENT
        // ====================================

        let movement =
            (
                event.deltaY /
                itemHeight
            ) *
            CAROUSEL_CONFIG.scrollAmount;


        /*
            Prevent absurdly large
            wheel events.
        */

        movement =
            Math.max(
                -2,
                Math.min(
                    2,
                    movement
                )
            );


        // ====================================
        // UPDATE TARGET
        // ====================================

        targetPosition +=
            movement;


        // ====================================
        // ADD SMALL MOMENTUM
        // ====================================

        velocity +=
            movement *
            CAROUSEL_CONFIG.momentumAmount;


        velocity =
            Math.max(
                -0.12,
                Math.min(
                    0.12,
                    velocity
                )
            );


        // ====================================
        // NORMALIZE
        // ====================================

        normalizePosition();


        // ====================================
        // RESET STOP TIMER
        // ====================================

        clearTimeout(
            debounceTimer
        );


        debounceTimer =
            setTimeout(() => {

                startSnap();

            },
            CAROUSEL_CONFIG.debounceDelay
        );

    },
    {
        passive: false
    }
);


// ========================================
// MOBILE TOUCH / SWIPE INPUT
// ========================================

let touchLastY = null;


if (worksCarousel) {

    // ====================================
    // TOUCH START
    // ====================================

    worksCarousel.addEventListener(
        "touchstart",
        (event) => {

            if (
                !event.touches.length
            ) {
                return;
            }


            touchLastY =
                event.touches[0].clientY;


            // ====================================
            // INTERRUPT SNAP
            // ====================================

            if (isSnapping) {

                cancelSnap();

            }


            // ====================================
            // CLEAR ACTIVE
            // ====================================

            clearActive();

        },
        {
            passive: true
        }
    );


    // ====================================
    // TOUCH MOVE
    // ====================================

    worksCarousel.addEventListener(
        "touchmove",
        (event) => {

            if (
                touchLastY === null ||
                !event.touches.length
            ) {
                return;
            }


            event.preventDefault();


            const currentY =
                event.touches[0].clientY;


            const deltaY =
                touchLastY -
                currentY;


            touchLastY =
                currentY;


            // ====================================
            // GET ITEM HEIGHT
            // ====================================

            const itemHeight =
                getItemHeight();


            // ====================================
            // CONVERT SWIPE TO MOVEMENT
            // ====================================

            let movement =
                (
                    deltaY /
                    itemHeight
                ) *
                CAROUSEL_CONFIG.scrollAmount;


            // ====================================
            // LIMIT MOVEMENT
            // ====================================

            movement =
                Math.max(
                    -1,
                    Math.min(
                        1,
                        movement
                    )
                );


            // ====================================
            // UPDATE TARGET
            // ====================================

            targetPosition +=
                movement;


            // ====================================
            // SMALL MOMENTUM
            // ====================================

            velocity +=
                movement *
                CAROUSEL_CONFIG.momentumAmount;


            velocity =
                Math.max(
                    -0.12,
                    Math.min(
                        0.12,
                        velocity
                    )
                );


            // ====================================
            // NORMALIZE
            // ====================================

            normalizePosition();

        },
        {
            passive: false
        }
    );


    // ====================================
    // TOUCH END
    // ====================================

    worksCarousel.addEventListener(
        "touchend",
        () => {

            touchLastY = null;


            // ====================================
            // SNAP TO CLOSEST WORK
            // ====================================

            clearTimeout(
                debounceTimer
            );


            debounceTimer =
                setTimeout(() => {

                    startSnap();

                },
                CAROUSEL_CONFIG.debounceDelay
            );

        },
        {
            passive: true
        }
    );


    // ====================================
    // TOUCH CANCEL
    // ====================================

    worksCarousel.addEventListener(
        "touchcancel",
        () => {

            touchLastY = null;

        },
        {
            passive: true
        }
    );

}


// ========================================
// WORK ITEM LINKS
// ========================================

const workLinks = [
    "project.html?project=souldier",
    "project.html?project=cvsey",
    "project.html?project=don24",
    "project.html?project=parting",
    "project.html?project=1775",
    "project.html?project=sunflower",
    "project.html?project=highdro",
    "project.html?project=tense",
    "project.html?project=tls25",
    "project.html?project=parting"
];


// ========================================
// WORK ITEM CLICK
// ========================================

items.forEach((item, index) => {

    item.addEventListener(
        "click",
        () => {

            const href =
                workLinks[
                    index % ITEM_COUNT
                ];


            // ====================================
            // SPECIAL PROJECT TRANSITION
            // ====================================

            if (
                href.startsWith(
                    "project.html"
                )
            ) {

                const pageTransition =
                    document.querySelector(
                        ".page-transition"
                    );


                sessionStorage.setItem(
                    "projectTransition",
                    "true"
                );


                // Reset transition to bottom

                pageTransition.classList.remove(
                    "is-ready",
                    "is-fading",
                    "is-leaving"
                );


                void pageTransition.offsetWidth;


                pageTransition.classList.add(
                    "is-project-leaving"
                );


                setTimeout(() => {

                    window.location.href =
                        href;

                }, 900);


                return;

            }


            // ====================================
            // NORMAL WORK LINK
            // ====================================

            window.location.href =
                href;

        }
    );

});


// ========================================
// THEME
// ========================================

const themeToggle =
    document.getElementById(
        "theme-toggle"
    );


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        (e) => {

            e.preventDefault();


            document.body.classList.add(
                "theme-transition"
            );


            document.body.classList.toggle(
                "dark-theme"
            );


            if (
                document.body.classList.contains(
                    "dark-theme"
                )
            ) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        }
    );

}


// ========================================
// MOBILE NAV
// ========================================

const mobileNavToggle =
    document.querySelector(
        ".mobile-nav-toggle"
    );


const mobileNav =
    document.querySelector("nav");


if (
    mobileNavToggle &&
    mobileNav
) {

    mobileNavToggle.addEventListener(
        "click",
        () => {

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

        }
    );


    mobileNav.querySelectorAll(
        "a:not(#theme-toggle)"
    ).forEach(link => {

        link.addEventListener(
            "click",
            () => {

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

            }
        );

    });

}