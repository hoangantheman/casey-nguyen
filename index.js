

// ========================================
// LOAD SAVED THEME
// ========================================

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

window.modelReady = false;

// ========================================
// LOADING SCREEN
// ========================================

const loader =
    document.querySelector(".loader");

const loaderFill =
    document.querySelector(".loader-fill");

const loaderPercent =
    document.querySelector(".loader-percent");


// ========================================
// CHECK HOW INDEX WAS OPENED
// ========================================

const navigationEntry =
    performance.getEntriesByType("navigation")[0];

const navigationType =
    navigationEntry?.type;

const isRefresh =
    navigationType === "reload";

const isFirstVisit =
    !sessionStorage.getItem("siteVisited");

const referrer =
    document.referrer;

const cameFromAnotherPage =
    referrer &&
    new URL(referrer).origin === window.location.origin &&
    !referrer.includes("index.html");


// ========================================
// DECIDE WHETHER TO SHOW LOADER
// ========================================

// SHOW when:
// 1. First visit
// 2. Refreshing index
//
// DON'T SHOW when:
// Coming from another page

const shouldShowLoader =
    isFirstVisit ||
    isRefresh;


// ========================================
// SKIP LOADER
// ========================================

if (!shouldShowLoader) {

    loader.remove();

}


// ========================================
// SHOW LOADER
// ========================================

else {

    // Remember that the site has been visited
    sessionStorage.setItem(
        "siteVisited",
        "true"
    );

    // Disable cursor trail
    document.body.classList.add("is-loading");


    // ========================================
    // PROGRESS
    // ========================================

    let progress = 0;


    function updateLoader() {

        loader.style.setProperty(
            "--progress",
            `${progress}%`
        );

        loaderPercent.textContent =
            `${Math.floor(progress)}%`;

    }


    // ========================================
    // LOADING ANIMATION
    // ========================================

    const loadingInterval =
        setInterval(() => {

            progress +=
                Math.random() * 4 + 1;


            // ====================================
            // REACH 100%
            // ====================================

            if (progress >= 100) {

                progress = 100;

                updateLoader();

                clearInterval(
                    loadingInterval
                );


                // ====================================
                // SHORT PAUSE AT 100%
                // ====================================

                setTimeout(() => {

                    loader.classList.add(
                        "is-complete"
                    );


                    // ====================================
                    // RED SHAPE FINISHES EXPANDING
                    // ====================================

                    setTimeout(() => {

                        loader.classList.add(
                            "is-hidden"
                        );


                        // ====================================
                        // REMOVE LOADER
                        // ====================================

                        setTimeout(() => {

                            document.body.classList.remove(
                                "is-loading"
                            );

                            loader.remove();

                        }, 500);

                    }, 900);

                }, 250);

                return;
            }


            // ====================================
            // UPDATE PROGRESS
            // ====================================

            updateLoader();

        }, 45);

}
// ========================================
// THEME
// ========================================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", (e) => {
    e.preventDefault();

    document.body.classList.add("theme-transition");

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// ========================================
// 3D HERO OBJECT
// ========================================

const canvas =
    document.querySelector("#hero-canvas");

const scene =
    new THREE.Scene();


// ========================================
// CAMERA
// ========================================

const camera =
    new THREE.PerspectiveCamera(
        35,
        canvas.clientWidth / canvas.clientHeight,
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
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    canvas.clientWidth,
    canvas.clientHeight,
    false
);

renderer.outputEncoding =
    THREE.sRGBEncoding;

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

scene.add(ambientLight);



// ========================================
// LOAD BLENDER OBJECT
// ========================================

let mouseX = 0;
let mouseY = 0;

// MOBILE SWIPE ROTATION
let touchRotation = 0;
let touchStartX = 0;
let isTouching = false;

const maxTouchRotation = 0.25;
const touchSensitivity = 0.008;

window.addEventListener("mousemove", (event) => {

    mouseX =
        (event.clientX / window.innerWidth) * 2 - 1;

    mouseY =
        (event.clientY / window.innerHeight) * 2 - 1;

});

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

let model = null;

const gltfLoader =
    new THREE.GLTFLoader();

gltfLoader.load(
    "models/objectalt.glb",

    (gltf) => {

        model = gltf.scene;
        model.traverse((child) => {

            if (child.isMesh && child.material.map) {

                child.material.map.colorSpace =
                    THREE.SRGBColorSpace;

                child.material.map.needsUpdate = true;
                

            }

});

        model.scale.set(18,18,18);
        model.position.y = -2.6;

        model.rotation.x = 0.3;
        model.rotation.y = -0.35;
        model.rotation.z = 0;

        scene.add(model);



        console.log(
            "3D OBJECT LOADED",
            model
        );
        window.modelReady = true;

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
// RENDER
// ========================================



function render3D() {

    requestAnimationFrame(
        render3D
    );

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

    composer.render();

}

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
                vec4(position, 1.0);

        }

    `,

    fragmentShader: `

        uniform sampler2D tDiffuse;

        uniform float time;

        varying vec2 vUv;


        void main() {

            vec2 uv = vUv;


            // =====================================
            // MOSAIC SIZE
            // =====================================

            float blockSize = 0.008;


            // =====================================
            // SUBTLE MOVEMENT
            // =====================================

            float movement =
                sin(time * 2.0) * 0.0015;

            uv.x += movement;
            uv.y -= movement;


            // =====================================
            // PIXELATE
            // =====================================

            uv =
                floor(
                    uv / blockSize
                ) * blockSize;


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





