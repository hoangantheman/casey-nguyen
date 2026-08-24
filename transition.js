const pageTransition =
    document.querySelector(".page-transition");


// ========================================
// PAGE ENTER
// ========================================

window.addEventListener("load", () => {

    const isTransitioning =
        sessionStorage.getItem("pageTransition");

    const isProjectTransition =
        sessionStorage.getItem("projectTransition");


    // ========================================
    // SPECIAL PROJECT TRANSITION
    // ========================================

    if (isProjectTransition) {

            // Keep the screen fully covered
            // when project.html first loads

            pageTransition.classList.remove(
                "is-ready",
                "is-leaving"
            );


            pageTransition.classList.add(
                "is-project-entering"
            );


            // Let project.html + Vimeo begin loading
            // before revealing it

            setTimeout(() => {

                pageTransition.classList.add(
                    "is-project-revealing"
                );

            }, 100);


            // Clean everything up

            setTimeout(() => {

                pageTransition.classList.remove(
                    "is-project-entering",
                    "is-project-revealing",
                    "is-project-leaving"
                );


                pageTransition.classList.add(
                    "is-ready"
                );


                sessionStorage.removeItem(
                    "projectTransition"
                );

            }, 900);


            return;

        }


    // ========================================
    // NORMAL PAGE TRANSITION
    // ========================================

    if (isTransitioning) {

        const is3DPage =
            document.body.classList.contains("home-page") ||
            document.body.classList.contains("about-page");


        // ========================================
        // GOING TO INDEX OR ABOUT
        // WAIT FOR 3D MODEL
        // ========================================

        if (is3DPage) {

            const waitForModel =
                setInterval(() => {

                    if (window.modelReady) {

                        clearInterval(
                            waitForModel
                        );


                        pageTransition.classList.add(
                            "is-fading"
                        );


                        setTimeout(() => {

                            pageTransition.classList.remove(
                                "is-fading"
                            );


                            pageTransition.classList.add(
                                "is-ready"
                            );


                            sessionStorage.removeItem(
                                "pageTransition"
                            );

                        }, 800);

                    }

                }, 50);

        }


        // ========================================
        // ALL OTHER PAGES
        // ========================================

        else {

            pageTransition.classList.add(
                "is-fading"
            );


            setTimeout(() => {

                pageTransition.classList.remove(
                    "is-fading"
                );


                pageTransition.classList.add(
                    "is-ready"
                );


                sessionStorage.removeItem(
                    "pageTransition"
                );

            }, 800);

        }

    }


    // ========================================
    // FIRST VISIT / REFRESH
    // ========================================

    else {

        pageTransition.classList.add(
            "is-ready"
        );

    }

});


// ========================================
// PAGE LEAVE
// ========================================

const links =
    document.querySelectorAll("a[href]");


links.forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            const href =
                this.getAttribute("href");


            // IGNORE ANCHORS

            if (
                !href ||
                href === "#" ||
                href.startsWith("#")
            ) {
                return;
            }


            // IGNORE EXTERNAL LINKS

            if (
                this.hostname &&
                this.hostname !==
                window.location.hostname
            ) {
                return;
            }


            event.preventDefault();


            sessionStorage.setItem(
                "pageTransition",
                "true"
            );


            pageTransition.classList.remove(
                "is-fading",
                "is-ready"
            );


            void pageTransition.offsetWidth;


            const isProjectLink =
                this.id === "project-previous" ||
                this.id === "project-next";


            if (isProjectLink) {

                sessionStorage.setItem(
                    "projectTransition",
                    "true"
                );

                pageTransition.classList.remove(
                    "is-fading",
                    "is-ready"
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


            sessionStorage.setItem(
                "pageTransition",
                "true"
            );

            pageTransition.classList.remove(
                "is-fading",
                "is-ready"
            );

            void pageTransition.offsetWidth;

            pageTransition.classList.add(
                "is-leaving"
            );

            setTimeout(() => {

                window.location.href =
                    href;

            }, 900);


            setTimeout(() => {

                window.location.href =
                    href;

            }, 900);

        }
    );

});