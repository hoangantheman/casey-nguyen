// ========================================
// LOAD SAVED THEME
// ========================================

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

window.modelReady = false;


// ========================================
// THEME
// ========================================

const themeToggle =
    document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", (e) => {

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

    });

}


// ========================================
// 3D ABOUT OBJECT
// ========================================

const canvas =
    document.querySelector(
        "#about-hero-canvas"
    );

const hero3D =
    document.querySelector(
        ".about-hero-3d"
    );

const faceCircle =
    document.querySelector(
        ".about-hero-3d .face-circle"
    );

const scene =
    new THREE.Scene();


// ========================================
// CAMERA
// ========================================

const camera =
    new THREE.PerspectiveCamera(
        35,
        canvas.clientWidth /
        canvas.clientHeight,
        0.1,
        100
    );

camera.position.z = 9.5;


// ========================================
// RENDERER
// ========================================

const renderer =
    new THREE.WebGLRenderer({

        canvas: canvas,

        alpha: true,

        antialias: true

    });

renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);

renderer.setSize(
    canvas.clientWidth,
    canvas.clientHeight,
    false
);

renderer.outputEncoding =
    THREE.sRGBEncoding;


// ========================================
// POST PROCESSING
// ========================================

const composer =
    new THREE.EffectComposer(
        renderer
    );

const renderPass =
    new THREE.RenderPass(
        scene,
        camera
    );

composer.addPass(
    renderPass
);


// ========================================
// LIGHT
// ========================================

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        2
    );

scene.add(
    ambientLight
);


// ========================================
// MOUSE
// ========================================

let mouseX = 0;
let mouseY = 0;

// MOBILE SWIPE ROTATION
let touchRotation = 0;
let touchStartX = 0;
let isTouching = false;

const maxTouchRotation = 0.25;
const touchSensitivity = 0.008;

window.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            (event.clientX /
                window.innerWidth) *
            2 - 1;

        mouseY =
            (event.clientY /
                window.innerHeight) *
            2 - 1;

    }
);


// ========================================
// MOBILE SWIPE
// ========================================

window.addEventListener("touchstart", (event) => {

    if (event.touches.length !== 1) return;

    touchStartX = event.touches[0].clientX;
    isTouching = true;

}, { passive: true });


window.addEventListener("touchmove", (event) => {

    if (!isTouching || event.touches.length !== 1) return;

    const currentX =
        event.touches[0].clientX;

    const deltaX =
        currentX - touchStartX;

    touchRotation +=
        deltaX * touchSensitivity;

    touchRotation =
        Math.max(
            -maxTouchRotation,
            Math.min(
                maxTouchRotation,
                touchRotation
            )
        );

    touchStartX = currentX;

}, { passive: true });


window.addEventListener("touchend", () => {

    isTouching = false;

});

// ========================================
// MOBILE VERTICAL SWIPE SCROLL
// ========================================

let verticalSwipeStartX = 0;
let verticalSwipeStartY = 0;
let verticalSwipeLastY = 0;

let verticalSwipe = false;
let verticalSwipeLocked = false;


window.addEventListener(
    "touchstart",
    (event) => {

        if (
            !window.matchMedia(
                "(hover: none) and (pointer: coarse)"
            ).matches
        ) {
            return;
        }

        if (
            event.touches.length !== 1
        ) {
            return;
        }


        verticalSwipeStartX =
            event.touches[0].clientX;

        verticalSwipeStartY =
            event.touches[0].clientY;

        verticalSwipeLastY =
            verticalSwipeStartY;

        verticalSwipe = false;
        verticalSwipeLocked = false;

    },
    {
        passive: true
    }
);


window.addEventListener(
    "touchmove",
    (event) => {

        if (
            !window.matchMedia(
                "(hover: none) and (pointer: coarse)"
            ).matches
        ) {
            return;
        }

        if (
            event.touches.length !== 1
        ) {
            return;
        }


        const currentX =
            event.touches[0].clientX;

        const currentY =
            event.touches[0].clientY;


        const totalX =
            Math.abs(
                currentX -
                verticalSwipeStartX
            );

        const totalY =
            Math.abs(
                currentY -
                verticalSwipeStartY
            );


        // ====================================
        // LOCK DIRECTION
        // ====================================

        if (
            !verticalSwipeLocked &&
            (
                totalX > 8 ||
                totalY > 8
            )
        ) {

            verticalSwipeLocked = true;

            verticalSwipe =
                totalY > totalX;

        }


        // ====================================
        // IGNORE HORIZONTAL SWIPES
        // ====================================

        if (!verticalSwipe) {
            return;
        }


        // ====================================
        // PREVENT NATIVE MOBILE SCROLL
        // ====================================

        event.preventDefault();


        // ====================================
        // GET VERTICAL MOVEMENT
        // ====================================

        const deltaY =
            verticalSwipeLastY -
            currentY;


        verticalSwipeLastY =
            currentY;


        // ====================================
        // UPDATE TARGET
        // ====================================

        scrollTarget +=
            deltaY;


        const maxScroll =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        scrollTarget =
            Math.max(
                0,
                Math.min(
                    scrollTarget,
                    maxScroll
                )
            );

    },
    {
        passive: false
    }
);


window.addEventListener(
    "touchend",
    () => {

        verticalSwipe = false;
        verticalSwipeLocked = false;

    }
);

// ========================================
// 3D FRAME SCROLL POSITION
// ========================================

if (hero3D) {

    function update3DPosition() {

        /* ====================================
           MOBILE
           ==================================== */

        if (
            window.matchMedia("(max-width: 600px)").matches
        ) {

            const scrollY =
                window.scrollY;

            const viewportHeight =
                window.innerHeight;


            // ====================================
            // MOBILE MOVEMENT RANGE
            // ====================================

            const start =
                viewportHeight * 0.15;

            const end =
                viewportHeight * 1.15;


            // ====================================
            // MOBILE SCROLL PROGRESS
            // ====================================

            const progress =
                Math.min(
                    Math.max(
                        (scrollY - start) /
                        (end - start),
                        0
                    ),
                    1
                );


            // ====================================
            // MOBILE POSITION
            // ====================================

            const startTop = 30;
            const endTop = 160;

            const top =
                startTop +
                (endTop - startTop) *
                progress;


            hero3D.style.left = "50%";
            hero3D.style.top = `${top}%`;


            return;
        }


        /* ====================================
           DESKTOP
        ==================================== */

        const scrollY =
            window.scrollY;

        const viewportHeight =
            window.innerHeight;


        // ====================================
        // WHEN THE MOVEMENT STARTS
        // ====================================

        const start =
            viewportHeight * 0.15;


        // ====================================
        // WHEN THE MOVEMENT ENDS
        // ====================================

        const end =
            viewportHeight * 1.15;


        // ====================================
        // SCROLL PROGRESS
        // ====================================

        const progress =
            Math.min(
                Math.max(
                    (scrollY - start) /
                    (end - start),
                    0
                ),
                1
            );


        // ====================================
        // HORIZONTAL POSITION
        // ====================================

        const isTablet =
            window.matchMedia(
                "(min-width: 601px) and (max-width: 1024px)"
            ).matches;


        const endX =
            isTablet
                ? 53
                : 50;


        const x =
            25 +
            (endX - 25) *
            progress;


        // ====================================
        // VERTICAL POSITION
        // ====================================

        const y =
            50 +
            (155 - 50) *
            progress;


        hero3D.style.left =
            `${x}%`;

        hero3D.style.top =
            `${y}%`;
    }


    // ========================================
    // UPDATE ON SCROLL
    // ========================================

    window.addEventListener(
        "scroll",
        update3DPosition,
        { passive: true }
    );


    // ========================================
    // UPDATE ON RESIZE
    // ========================================

    window.addEventListener(
        "resize",
        update3DPosition
    );


    // ========================================
    // INITIAL POSITION
    // ========================================

    update3DPosition();

}


// ========================================
// LOAD MODEL
// ========================================

let model = null;

const gltfLoader =
    new THREE.GLTFLoader();

gltfLoader.load(

    "models/objectalt.glb",

    (gltf) => {

        model =
            gltf.scene;


        // ====================================
        // MATERIAL / COLOR SPACE
        // ====================================

        model.traverse(
            (child) => {

                if (
                    child.isMesh &&
                    child.material.map
                ) {

                    child.material.map.colorSpace =
                        THREE.SRGBColorSpace;

                    child.material.map.needsUpdate =
                        true;

                }

            }
        );


        // ====================================
        // MODEL TRANSFORM
        // ====================================

        model.scale.set(
            18,
            18,
            18
        );

        model.position.y =
            -2.6;

        model.rotation.x =
            0.3;

        model.rotation.y =
            -0.35;

        model.rotation.z =
            0;


        scene.add(
            model
        );


        // ====================================
        // MODEL READY
        // ====================================

        console.log(
            "3D OBJECT LOADED",
            model
        );

        window.modelReady =
            true;

    },


    undefined,


    (error) => {

        console.error(
            "3D OBJECT FAILED TO LOAD",
            error
        );

    }

);


// ========================================
// MOSAIC SHADER
// ========================================

const mosaicShader = {

    uniforms: {

        tDiffuse: {
            value: null
        },

        time: {
            value: 0
        }

    },


    vertexShader: `

        varying vec2 vUv;

        void main() {

            vUv = uv;

            gl_Position =
                projectionMatrix *
                modelViewMatrix *
                vec4(
                    position,
                    1.0
                );

        }

    `,


    fragmentShader: `

        uniform sampler2D tDiffuse;

        uniform float time;

        varying vec2 vUv;

        void main() {

            vec2 uv = vUv;

            float blockSize =
                0.008;

            float movement =
                sin(time * 2.0) *
                0.0015;

            uv.x += movement;

            uv.y -= movement;

            uv =
                floor(
                    uv / blockSize
                ) *
                blockSize;

            vec4 mosaic =
                texture2D(
                    tDiffuse,
                    uv
                );

            gl_FragColor =
                mosaic;

        }

    `

};

const mosaicPass =
    new THREE.ShaderPass(
        mosaicShader
    );

composer.addPass(
    mosaicPass
);


// ========================================
// RENDER
// ========================================

function render3D() {

    requestAnimationFrame(
        render3D
    );


    // ====================================
    // MODEL MOUSE TILT
    // ====================================

    if (model) {

        // DESKTOP — EXACTLY AS BEFORE
        if (
            window.matchMedia(
                "(hover: hover) and (pointer: fine)"
            ).matches
        ) {

            model.rotation.y =
                -0.65 + mouseX * 0.1;

            model.rotation.x =
                0.3 + mouseY * 0.06;

        }

        // MOBILE / TABLET — SWIPE
        else {

            const targetRotation =
                -0.65 + touchRotation;

            model.rotation.y +=
                (targetRotation - model.rotation.y) * 0.12;

            model.rotation.x +=
                (0.3 - model.rotation.x) * 0.12;

            // Return to original position
            // when the user isn't touching
            if (!isTouching) {

                touchRotation +=
                    (0 - touchRotation) * 0.08;

            }

        }

    }


    // ====================================
    // FACE CIRCLE MOUSE MOVEMENT
    // ====================================

const faceCircle =
    document.querySelector(".face-circle");

        if (faceCircle) {

            // DESKTOP — existing mouse movement
            if (
                window.matchMedia(
                    "(hover: hover) and (pointer: fine)"
                ).matches
            ) {

                faceCircle.style.transform =
                    `translate(
                        calc(-50% + ${mouseX * 8}px),
                        calc(-50% + ${mouseY * 8}px)
                    )`;

            }

            // MOBILE / TABLET — react to swipe
            else {

                const faceX =
                    touchRotation * 25;

                faceCircle.style.transform =
                    `translate(
                        calc(-50% + ${faceX}px),
                        -50%
                    )`;

            }

        }


    // ====================================
    // RENDER
    // ====================================

    composer.render();

}

render3D();


// ========================================
// RESIZE
// ========================================

window.addEventListener(
    "resize",
    () => {

        const width =
            canvas.clientWidth;

        const height =
            canvas.clientHeight;


        renderer.setSize(
            width,
            height,
            false
        );


        camera.aspect =
            width / height;

        camera.updateProjectionMatrix();

    }
);


// ========================================
// INTRO TEXT ACTIVATION
// ========================================

const introText =
    document.querySelectorAll(
        ".intro p.selectable, .intro .tldr-label"
    );

const cameFromTransition =
    sessionStorage.getItem(
        "pageTransition"
    );


// ========================================
// RESET ACTIVATED TEXT
// ========================================

if (!cameFromTransition) {

    introText.forEach(
        (text, index) => {

            sessionStorage.removeItem(
                `intro-text-${index}`
            );

        }
    );

}


// ========================================
// RESTORE / ACTIVATE TEXT
// ========================================

introText.forEach(
    (text, index) => {

        const storageKey =
            `intro-text-${index}`;


        if (
            sessionStorage.getItem(
                storageKey
            ) === "true"
        ) {

            text.classList.add(
                "is-active"
            );

        }


        text.addEventListener(
            "mouseenter",
            () => {

                text.classList.add(
                    "is-active"
                );

                sessionStorage.setItem(
                    storageKey,
                    "true"
                );

            }
        );

    }
);


// ========================================
// TLDR FADE IN AT END OF PAGE
// ========================================

const tldr =
    document.querySelector(
        ".tldr"
    );

if (tldr) {

    let revealed = false;

    function checkPageEnd() {

        if (revealed) return;

        const scrollPosition =
            window.innerHeight +
            window.scrollY;

        const pageHeight =
            document.documentElement
                .scrollHeight;


        if (
            scrollPosition >=
            pageHeight - 150
        ) {

            tldr.classList.add(
                "is-visible"
            );

            revealed = true;

        }

    }


    window.addEventListener(
        "scroll",
        checkPageEnd,
        {
            passive: true
        }
    );

}


// ========================================
// SMOOTH SCROLL
// ========================================

let scrollTarget =
    window.scrollY;

let scrollCurrent =
    window.scrollY;


window.addEventListener(
    "wheel",
    (event) => {

        event.preventDefault();


        scrollTarget +=
            event.deltaY;


        scrollTarget =
            Math.max(
                0,
                Math.min(
                    scrollTarget,
                    document.documentElement
                        .scrollHeight -
                    window.innerHeight
                )
            );

    },
    {
        passive: false
    }
);


function smoothScroll() {

    scrollCurrent +=
        (
            scrollTarget -
            scrollCurrent
        ) * 0.08;


    window.scrollTo(
        0,
        scrollCurrent
    );


    requestAnimationFrame(
        smoothScroll
    );

}

smoothScroll();



// ========================================
// MOBILE NAV
// ========================================

const mobileNavToggle =
    document.querySelector(".mobile-nav-toggle");

const mobileNav =
    document.querySelector("nav");

if (mobileNavToggle && mobileNav) {

    mobileNavToggle.addEventListener("click", () => {

        const isOpen =
            mobileNav.classList.toggle("mobile-nav-open");

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