// ========================================
// LOAD SAVED THEME
// ========================================

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add(
        "dark-theme"
    );

}


// ========================================
// PROJECT DATABASE
// ========================================

const projects = {

    sunflower: {

        title: "SUNFLOWER",

        year: "2025",

        type: "SHORT FILM",

        role: "DIRECTOR",

        video:
            "https://player.vimeo.com/video/1220093973?autoplay=1&loop=1&background=1",

        poster:
            "images/sunflowerfull.png",

        trailImages: [
            "images/sunflower-trail-1.JPG",
            "images/sunflower-trail-2.JPG",
            "images/sunflower-trail-3.JPG",
            "images/sunflower-trail-4.JPG",
            "images/sunflower-trail-5.JPG",
            "images/sunflower-trail-6.jpg"
        ],


        content: [

            {
                type: "intro",

                heading:
                    "SUNFLOWER",

                paragraphs: [

                    "Sunflower is a coming-of-age short film - featured in The Last Show 2025, following Anh Duong – an energetic high school girl through the bright first days of grade 10th to the academic burden she goes through in grade 12th.",

                    "Told through a single POV, Sunflower captures the hardships of growing up as a highschool student in Vietnam – dealing with immense academic pressure - something that every high school students go through.",

                    "I was screenwriter and director for this project. For every filming session, I would try to make sure we were on schedule, that we fulfilled the shotlist, and that the actors' expressions and lines were on point.",

                    "To this day, I'm extremely grateful to every single individual who trusted in what I saw and supported me in such a big project. For someone who had little filming experience, it meant the world to me. Thank you all! I mean it!",

                    "Honorably, Sunflower was also featured in Muc Tim – a beloved teen magazine & news site in Vietnam!"
                ]

            },
                {
                type: "credits",

                items: [

                    {
                        role: "WRITER/DIRECTOR",

                        names: [
                            "Casey Nguyen"
                        ]
                    },

                    {
                        role: "DOP/PRODUCER",

                        names: [
                            "Toni Pham"
                        ]
                    },

                    {
                        role: "PRODUCER",

                        names: [
                            "Ha My"
                        ]
                    },

                    {
                        role: "GAFFER",

                        names: [
                            "Duc Trung",
                        ]
                    },

                    {
                        role: "LIGHTING ASSISTANT",

                        names: [
                            "Sane"
                        ]
                    },

                    {
                        role: "ART DIRECTOR",

                        names: [
                            "Nguyen Han",
                            "Bao Khanh"
                        ]
                    },

                    {
                        role: "1ST AD",

                        names: [
                            "Ha My",
                            
                        ]
                    },

                    {
                        role: "2ND AD",

                        names: [
                            "Ngoc Han"
                        ]
                    },

                    {
                        role: "CAM OP",

                        names: [
                            "Toni Pham",
                            "Duc Trung",
                            "John Harrison",
                            "Minh Qui"
                        ]
                    },

                    {
                        role: "EDITOR",

                        names: [
                            "Duc Trung",
                            "Toni Pham"
                        ]
                    },

                    {
                        role: "COLORIST",

                        names: [
                            "Duc Trung",
                            "Toni Pham"
                        ]
                    },

                    {
                        role: "AC",

                        names: [
                            "John Harrison",
                            "Duc Trung"
                        ]
                    },

                    {
                        role: "SOUND MIXER",

                        names: [
                            "Ngoc Han",
                            
                        ]
                    },

                    {
                        role: "ART ASSISTANTS",

                        names: [
                            "Helen",
                            "Main Phan",
                            "Nguyen Sa"
                        ]
                    },

                    {
                        role: "TYPO ANIMATION",

                        names: [
                            "Hiu Pan"
                        ]
                    },

                    {
                        role: "PAS",

                        names: [
                            "Bang Tran",
                            "Hoang Thien",
                            "Quang Minh",
                            "Duy Khang"
                        ]
                    },

                    {
                        role: "BTS",

                        names: [
                            "Hoang Thien",
                            "Nguyen Han"
                        ]
                    },

                    {
                        role: "ACTORS",

                        names: [
                            "Phuong Quynh",
                            "Minh Khang",
                            "Yen Nhien",
                            "Hieu Thuan",
                            "Mr. Minh Duc",
                            "Mrs. Phi Lan",
                            "Mrs. Nha Truc",
                            "Mrs. Van Trang",
                            "Mr. Tan Tai",
                            "Mrs. Anh Hoa"
                        ]
                    },

                    {
                        role: "PROPS",

                        names: [
                            "Ngu Yen",
                            "Beu Khanh",
                            "Co Hang Xom Coffee",
                            "Hi There Coffee"
                        ]
                    },

                    {
                        role: "FILM SET",

                        names: [
                            "Le Quy Don Highschool",
                            "Ha My's Turf"
                        ]
                    },

                    {
                        role: "CAMEO",

                        names: [
                            "Ha Anh",
                            "Yen Nhi",
                            "Anh Dao",
                            "Ngoc Tuyet",
                            "Gia Huy"
                        ]
                    },

                    {
                        role: " ",

                        names: [
                            "Bao Han",
                            "Gia Han",
                            "Tra My",
                            "Bao Chau"
                        ]
                    },

                    {
                        role: " ",

                        names: [
                            "Mai Khanh",
                            "Huy Long",
                            "Minh Khiet",
                            "Nomura Yoshio"
                        ]
                    },

                    {
                        role: " ",

                        names: [
                            "Gia Thu",
                            "Tuyet Han",
                            "Hong Minh",
                            "Kim Vy"
                        ]
                    }

                ]

            }

        ]


    },

    


    highdro: {

        title: "HIGHDRO!",

        year: "2024",

        type: "VISUAL IDENTITY",

        role: "DESIGNER",

        video:
            "https://player.vimeo.com/video/1220109127?autoplay=1&loop=1&background=1",

        poster:
            "images/highdrofull.png",

        trailImages: [
            "images/highdro-trail-1.png",
            "images/highdro-trail-2.png",
            "images/highdro-trail-3.png",
            "images/highdro-trail-4.png",
            "images/highdro-trail-5.png",

        ],


        content: [

            {
                type: "intro",

                heading: "HIGHDRO!",

                paragraphs: [

                    "HIGHDRO! (HI-DRO!) is a soda bar that my class designed exclusively for Lê Quý Đôn High’s 2024 Spring Festival. In 2024, we took a step back to polish our identity, as well as our menu.",

                    "I was in charge of leading the project, which includes: distributing work to my classmates and keeping track of them, crafting our menu, directing our social media account, launching promotional campaigns, and most importantly, building HIGHDRO!’s visual identity.",

                    "For our visual identity, I decided that we had to go with an identity that reeks of boldness. This vision then lead to our choice of colors, as well as our social media designs, and our direction of art on the whole.",

                    "Like any other projects, working on HIGHDRO! was a strenuous process, but it was one that is extremely valuable for every individual who participated, myself included."

                ]

            },


            {
                type: "credits",

                items: [

                    {
                        role: "DESIGNER/ART DIRECTOR",

                        names: [
                            "Casey Nguyen"
                        ]
                    },

                    {
                        role: "DOP",

                        names: [
                            "Toni Pham"
                        ]
                    },

                    {
                        role: "ACTORS",

                        names: [
                            "Kim Thy",
                            "Quoc Thai"
                        ]
                    },

                    {
                        role: "MOTION DESIGN",

                        names: [
                            "Hiu Pan"
                        ]
                    },

                    {
                        role: "MENU DESIGNER",

                        names: [
                            "Bao Ngoc",
                            "Quang Minh",
                            "Toan Thinh",
                            "Duy Khang",
                            "Yen Nhi",
                            "Dong Anh"
                        ]
                    },

                    {
                        role: "SPECIAL THANKS TO",

                        names: [
                            "11A2"
                        ]
                    }

                ]

            }

        ]

    },

    tense: {

        title: "’TENSE’",

        year: "2024",

        type: "MUSIC VIDEO",

        role: "DIRECTOR",

        video:
            "https://player.vimeo.com/video/1220103354?autoplay=1&loop=1&background=1",

        poster:
            "images/tensefull.png",
        
        trailImages: [
            "images/tense-trail-1.png",
            "images/tense-trail-2.png",
            "images/tense-trail-3.png",
        ],


        content: [

            {
                type: "intro",

                heading: "’TENSE’",

                paragraphs: [

                    "‘Tense’ is our rap video entry for a schoolwide project - ROSS. The visuals are inspired largely by Kendrick Lamar’s music videos, where the majority of his shots are still shots, but those still manage to convey the very chaotic essence of rap. ",

                    "This is why most of our shots are still, where we tried to play with different compositions and angles, as well as colors. Visual-wise, I think this project looked pretty decent!",

                    "Overall, this was just another fun, small project that I had a chance to work on."

                ]

            },


            {
                type: "credits",

                items: [

                    {
                        role: "DIRECTOR",

                        names: [
                            "Casey Nguyen"
                        ]
                    },

                    {
                        role: "DOP",

                        names: [
                            "Toni Pham"
                        ]
                    },

                    {
                        role: "WRITTEN BY",

                        names: [
                            "C.U.M.",
                            "Hoang Thien"
                        ]
                    },

                    {
                        role: "PERFORMED BY",

                        names: [
                            "C.U.M.",
                            "Hoang Thien"
                        ]
                    },

                    {
                        role: "TYPO ANIMATION",

                        names: [
                            "Hiu Pan"
                        ]
                    },

                    {
                        role: "CAMEO",

                        names: [
                            "Quang Minh",
                            "Duy Khang",
                            "Khanh Duy",
                            "Ming Feng",
                            "Si Tin"
                        ]
                    },

                ]

            }

        ]

    },

    parting: {

        title: "PARTING",

        year: "2025",

        type: "SHORT FILM",

        role: "DIRECTOR",

        video:
            "https://player.vimeo.com/video/1220107655?autoplay=1&loop=1&background=1",

        poster:
            "images/partingfull.png",

        trailImages: [
            "images/parting-trail-1.png",
            "images/parting-trail-2.png",
            "images/parting-trail-3.png",
            "images/parting-trail-4.png",
            "images/parting-trail-5.png"
        ],


        content: [

            {
                type: "intro",

                heading: "PARTING",

                paragraphs: [

                    "Parting is our small high school literature homework - to retell one of the many stories about Ho Chi Minh. The story follows Ho Chi Minh as he leaves the country to find a way to free Vietnam. However, that meant he must leave the love of his life behind. ",

                    "Although the short film is only 5 minutes long, and is based on a very small strip of the novel The Parting On Nha Rong Wharf (Cuoc Chia Li Tren Ben Nha Rong), I felt like we did a decent job in our cinematography and is worth a mention. We got a perfect mark for this homework:)"

                ]

            },


            {
                type: "credits",

                items: [

                    {
                        role: "DIRECTOR/WRITER",

                        names: [
                            "Casey Nguyen"
                        ]
                    },

                    {
                        role: "DOP",

                        names: [
                            "Toni Pham"
                        ]
                    },

                    {
                        role: "ACTORS",

                        names: [
                            "Hiu Pan",
                            "Ha Anh"
                        ]
                    },

                    {
                        role: "CAMEO",

                        names: [
                            "Khanh Duy",
                            "Ming Feng",
                            "Minh Dang",
                            "Yen Nhi",
                            "Tan Phat",
                            "C.U.M.",
                            "Nhat Huy"
                        ]
                    },

                    {
                        role: "FILM SET",

                        names: [
                            "Nha Rong Wharf",
                            "Thi Coffee"
                        ]
                    },

                ]

            }

        ]

    },

    souldier: {

        title: "’SOUL’DIER",

        year: "2025",

        type: "MUSIC VIDEO",

        role: "DIRECTOR",

        video:
            "https://player.vimeo.com/video/1220119790?autoplay=1&loop=1&background=1",

        poster:
            "images/souldierfull.png",
        
        trailImages: [
            "images/souldier-trail-1.png",
            "images/souldier-trail-2.png",
            "images/souldier-trail-3.png"
        ],


        content: [

            {
                type: "intro",

                heading: "’SOUL’DIER",

                paragraphs: [

                    "‘Soul’dier is another small homework of ours. We had to make a rap music video about Vietnam’s glorious history of war. Personally, this is just a very small rap video, in every metrics. But I do think that the visuals is not half bad."


                ]

            },


            {
                type: "credits",

                items: [

                    {
                        role: "DIRECTOR",

                        names: [
                            "Casey Nguyen"
                        ]
                    },

                    {
                        role: "DOP",

                        names: [
                            "Toni Pham"
                        ]
                    },

                    {
                        role: "WRITTEN BY",

                        names: [
                            "C.U.M.",
                            "Hoang Thien"
                        ]
                    },

                    {
                        role: "PERFORMED BY",

                        names: [
                            "C.U.M."
                        ]
                    },

                    {
                        role: "FILM SET",

                        names: [
                            "Ho Chi Minh City Museum",
                        ]
                    },

                ]

            }

        ]

    },

    cvsey: {

        title: "CVSEY.PSD",

        year: "2021-26",

        type: "COLLECTION",

        role: "DESIGNER",

        video:
            "https://player.vimeo.com/video/1220122133?autoplay=1&loop=1&background=1",

        poster:
            "images/cvseyfull.png",

        trailImages: [
            "images/cvsey-trail-1.png",
            "images/cvsey-trail-2.png",
            "images/cvsey-trail-3.png",
            "images/cvsey-trail-4.png",
            "images/cvsey-trail-5.png",

        ],


        content: [

            {
                type: "intro",

                heading: "CVSEY.PSD",

                paragraphs: [

                    "I have a collection of my design works on Instagram, under the account named @cvsey.psd. It is also on this account where I'd try out new design stuff. Instagram has been one of the most valuable platforms in my design journey. While it’s not made specifically for designers, I discovered countless creative minds who use it to share tips, showcase work, and support others in the field.",

                    "This opens the doors to many opportunities for me, later granting me the chance to work on multiple projects, one of the which being Don24H, a project that marked the real beginning of my creative journey."

                ]

            },


            {
                type: "credits",

                items: [

                    {
                        role: "DESIGNER",

                        names: [
                            "Casey Nguyen"
                        ]
                    },

                ]

            }

        ]

    },

    tls25: {

        title: "TLS’25",

        year: "2025",

        type: "VISUAL IDENTITY",

        role: "DESIGNER",

        video:
            "https://player.vimeo.com/video/1220128497?autoplay=1&loop=1&background=1",

        poster:
            "images/tlsfull.png",
        
        trailImages: [
            "images/tls25-trail-1.png",
            "images/tls25-trail-2.png",
            "images/tls25-trail-3.png",
            "images/tls25-trail-4.png",
            "images/tls25-trail-5.png"

        ],

        content: [

            {
                type: "intro",

                heading: "TLS’25",

                paragraphs: [

                    "Every year, Don High’s seniors perform what we call “The Last Show” – a musical that marks the end of our 1000-day journey in Le Quy Don.",

                    "I led the Design Department, overseeing the visual identity of both our socials and the on-stage experience. It is also in this project that I made my real debut as a director, as well as a screenwriter – stepping fully into the roles that I’ve always dreamt of doing.",

                    "The Last Show was undoubtedly the most physically and mentally demanding project that I’ve taken on. Still, it is the one I hold closest to heart. Over the course of five months, we built everything from scratch – fortunately, the show concluded exactly the way we hoped it would.",

                    "This part of my portfolio is dedicated to my work in The Last Show – a beautiful farewell, and my most sentimental project to date."

                ]

            },


            {
                type: "credits",

                items: [

                    {
                        role: "DESIGNERS",

                        names: [
                            "Casey Nguyen",
                            "Thien Pham",
                            "Gaheun Pham"
                        ]
                    },

                    {
                        role: "MOTION DESIGNER",

                        names: [
                            "Hiu Pan"
                        ]
                    },

                    {
                        role: "ART DIRECTORS",

                        names: [
                            "Toni Pham",
                            "Ha My"
                        ]
                    },

                    {
                        role: "PUT TOGETHER BY",

                        names: [
                            "The Last Show Team",
                            "The Entirety of Grade 12 Students at Le Quy Don Highschool"
                        ]
                    },

                ]

            }

        ]

    },

    don24: {

        title: "DON24H",

        year: "2023",

        type: "VISUAL IDENTITY",

        role: "DESIGNER",

        video:
            "https://player.vimeo.com/video/1220132959?autoplay=1&loop=1&background=1",

        poster:
            "images/don24full.png",

        trailImages: [
            "images/don24-trail-1.png",
            "images/don24-trail-2.png",
            "images/don24-trail-3.png",

        ],


        content: [

            {
                type: "intro",

                heading: "DON24H",

                paragraphs: [

                    "Don 24H is a well-known entertainment Facebook page amongst students of Lê Quý Đôn High. Standing out for their eccentric sense of humor, this page has always been a hot topic for us students.",

                    "The owners of the page discovered my work through Instagram, and my design style immediately struck them. As it happened, the page was in need of a visual identity refresh for an upcoming podcast - and I was fortunate enough to be selected as the designer for the project."

                ]

            },
            


            {
                type: "credits",

                items: [

                    {
                        role: "DESIGNER",

                        names: [
                            "Casey Nguyen"
                        ]
                    },

                    {
                        role: "ART DIRECTOR",

                        names: [
                            "Huyen Tran"
                        ]
                    },

                    {
                        role: "GUEST",

                        names: [
                            "Thao Nghi"
                        ]
                    },

                    {
                        role: "HOSTS",

                        names: [
                            "Thai An",
                            "Shaun Le"
                        ]
                    },

                    {
                        role: "SPONSORS",

                        names: [
                            "YOLA",
                            "RMIT University",
                            "Mr. Brown Coffee"
                        ]
                    },

                ]

            }

        ]

    },

    1775: {

        title: "1775",

        year: "2025",

        type: "VISUAL IDENTITY",

        role: "DESIGNER",

        video:
            "https://player.vimeo.com/video/1220171115?autoplay=1&loop=1&background=1",

        poster:
            "images/1775full.png",

        trailImages: [
            "images/1775-trail-1.png",
            "images/1775-trail-2.png",
            "images/1775-trail-3.png",
            "images/1775-trail-4.png"

        ],


        content: [

            {
                type: "intro",

                heading: "1775",

                paragraphs: [

                    "1775 – Unity Beyond Borders is a project that looks back on Vietnam’s proud and heroic history while celebrating the peace we are fortunate to experience today. More than a lesson from the past, the project aims to give younger generations an opportunity to better understand, appreciate, and take pride in the resilience of our people and a nation whose history continues to live on. ",

                    "As a team, we brought together different ideas and perspectives to shape the project’s visual identity. I took on the role of Design Lead, helping consolidate these ideas into a cohesive visual direction while coordinating the team’s workflow, assigning tasks, and structuring the production timeline for each post."

                ]

            },


            {
                type: "credits",

                items: [

                    {
                        role: "DESIGNERS",

                        names: [
                            "Casey Nguyen",
                            "Lan Khanh",
                            "Nguyen Han",
                            "Ky Duyen",
                            "Gia Khang",
                            "Pham Khoi",
                            "Phuong Nghi"
                        ]
                    },

                    

                    {
                        role: "MOTION DESIGN",

                        names: [
                            "Hiu Pan"
                        ]
                    },

                    {
                        role: "PUT TOGETHER BY",

                        names: [
                            "The 1775 Team"
                        ]
                    },

                

                ]

            }

        ]

    },


};


// ========================================
// GET PROJECT FROM URL
// ========================================

const params =
    new URLSearchParams(
        window.location.search
    );


const projectID =
    params.get("project");


// ========================================
// DEFAULT PROJECT
// ========================================

const project =
    projects[projectID] ||
    projects.sunflower;

document.title = `CASEY - ${project.title}`;


// ========================================
// GET ELEMENTS
// ========================================

const projectTitle =
    document.getElementById(
        "project-title"
    );


const projectYear =
    document.getElementById(
        "project-year"
    );


const projectType =
    document.getElementById(
        "project-type"
    );


const projectRole =
    document.getElementById(
        "project-role"
    );


const projectVideo =
    document.getElementById(
        "project-video"
    );


const projectPoster =
    document.getElementById(
        "project-poster"
    );


// ========================================
// UPDATE PROJECT PAGE
// ========================================

projectTitle.textContent =
    project.title;


projectYear.textContent =
    project.year;


projectType.textContent =
    project.type;


projectRole.textContent =
    project.role;


projectPoster.src =
    project.poster;


projectVideo.src =
    project.video;

// ========================================
// PROJECT PANEL SCROLL
// ========================================

const projectPanel =
    document.querySelector(".project-panel");

const projectPage =
    document.querySelector(".project-page");

function updateProjectUI() {

    if (!projectPanel || !projectPage) return;

    const panelTop =
        projectPanel.getBoundingClientRect().top;

    const viewportHeight =
        window.innerHeight;


    // ========================================
    // 1. TITLE + META FADE OUT
    // As soon as the panel starts rising
    // ========================================

    if (window.scrollY > 0 && panelTop < viewportHeight) {

        projectPage.classList.add(
            "project-panel-scrolling"
        );

    } else {

        projectPage.classList.remove(
            "project-panel-scrolling"
        );

    }


    // ========================================
    // 2. UI CHANGES TO RED ONLY WHEN
    // PANEL ACTUALLY REACHES THE TOP
    // ========================================

    if (panelTop <= 0) {

        projectPage.classList.add(
            "project-panel-active"
        );

    } else {

        projectPage.classList.remove(
            "project-panel-active"
        );

    }

}


window.addEventListener(
    "scroll",
    updateProjectUI,
    { passive: true }
);


window.addEventListener(
    "resize",
    updateProjectUI
);


updateProjectUI();


// ========================================
// THEME TOGGLE
// ========================================

const themeToggle =
    document.getElementById(
        "theme-toggle"
    );


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

// ========================================
// PROJECT CONTENT
// ========================================

const projectContent =
    document.getElementById(
        "project-content"
    );


project.content.forEach(block => {

    let element;

        // ====================================
        // INTRO
        // ====================================

        if (block.type === "intro") {

            element =
                document.createElement("section");

            element.classList.add(
                "project-intro"
            );


            const heading =
                document.createElement("h2");

            heading.classList.add(
                "project-intro-heading"
            );

            heading.textContent =
                block.heading;


            const textWrapper =
                document.createElement("div");

            textWrapper.classList.add(
                "project-intro-text"
            );


            block.paragraphs.forEach(paragraph => {

                const text =
                    document.createElement("p");

                text.classList.add(
                    "selectable"
                );

                text.textContent =
                    paragraph;


                textWrapper.appendChild(
                    text
                );

            });


            element.appendChild(
                heading
            );

            element.appendChild(
                textWrapper
            );

        }

        // ====================================
        // CREDITS
        // ====================================

        if (block.type === "credits") {

            element =
                document.createElement("section");

            element.classList.add(
                "project-credits"
            );


            block.items.forEach(item => {

                const credit =
                    document.createElement("div");

                credit.classList.add(
                    "project-credit"
                );


                const role =
                    document.createElement("p");

                role.classList.add(
                    "credit-role"
                );

                role.textContent =
                    item.role;


                const names =
                    document.createElement("div");

                names.classList.add(
                    "credit-names"
                );


                item.names.forEach(name => {

                    const person =
                        document.createElement("p");

                    person.classList.add(
                        "credit-name",
                        "selectable"
                    );

                    person.textContent =
                        name;


                    names.appendChild(
                        person
                    );

                });


                credit.appendChild(
                    role
                );

                credit.appendChild(
                    names
                );


                element.appendChild(
                    credit
                );

            });

        }

    // ====================================
    // LABEL
    // ====================================

    if (block.type === "label") {

        element =
            document.createElement("p");

        element.classList.add(
            "project-label"
        );

        element.textContent =
            block.text;

    }


    // ====================================
    // HEADING
    // ====================================

    if (block.type === "heading") {

        element =
            document.createElement("h3");

        element.classList.add(
            "project-heading"
        );

        element.textContent =
            block.text;

    }


    // ====================================
    // TEXT
    // ====================================

    if (block.type === "text") {

        element =
            document.createElement("p");

        element.classList.add(
            "project-description",
            "selectable"
        );

        element.textContent =
            block.text;

    }


    // ====================================
    // IMAGE
    // ====================================

    if (block.type === "image") {

        element =
            document.createElement("img");

        element.classList.add(
            "project-image"
        );

        element.src =
            block.src;

        element.alt =
            block.alt || "";

    }


    // ====================================
    // ADD TO PAGE
    // ====================================

    if (element) {

        projectContent.appendChild(
            element
        );

    }

});

// ====================================
// PREVIOUS / NEXT PROJECT
// ====================================

const projectOrder =
    Object.keys(projects);


const currentProjectIndex =
    projectOrder.indexOf(
        projectID
    );


const previousProjectIndex =
    (
        currentProjectIndex
        - 1
        + projectOrder.length
    )
    % projectOrder.length;


const nextProjectIndex =
    (
        currentProjectIndex
        + 1
    )
    % projectOrder.length;


const previousLink =
    document.getElementById(
        "project-previous"
    );


const nextLink =
    document.getElementById(
        "project-next"
    );


previousLink.textContent =
    "PREVIOUS";


previousLink.href =
    `project.html?project=${
        projectOrder[
            previousProjectIndex
        ]
    }`;


nextLink.textContent =
    "NEXT";


nextLink.href =
    `project.html?project=${
        projectOrder[
            nextProjectIndex
        ]
    }`;
// ========================================
// PROJECT IMAGE TRAIL
// ========================================

const projectTrail =
    document.getElementById(
        "project-trail"
    );


const trailImages =
    project.trailImages || [];


let trailImageIndex = 0;

let lastTrailX = 0;
let lastTrailY = 0;

let hasTrailPosition =
    false;


const TRAIL_CONFIG = {

    // Minimum mouse movement
    // before another image appears
    spawnDistance: 150,

    // Maximum images alive
    maxImages: 8,

    // Image lifetime
    lifetime: 750,

    // Small random movement
    offsetX: 18,
    offsetY: 14,

    // Random rotation
    rotation: 4,

    // Slight size variation
    scaleMin: 0.88,
    scaleMax: 1.05

};

// ========================================
// TRAIL HELPERS
// ========================================

function randomRange(
    min,
    max
) {

    return (
        Math.random()
        * (max - min)
        + min
    );

}


function distance(
    x1,
    y1,
    x2,
    y2
) {

    return Math.sqrt(

        Math.pow(
            x2 - x1,
            2
        )

        +

        Math.pow(
            y2 - y1,
            2
        )

    );

}

// ========================================
// CREATE TRAIL IMAGE
// ========================================

function createTrailImage(
    x,
    y
) {

    if (
        !projectTrail ||
        !trailImages.length
    ) return;


    // ====================================
    // LIMIT ACTIVE IMAGES
    // ====================================

    const activeImages =
        projectTrail.querySelectorAll(
            ".project-trail-image"
        );


    if (
        activeImages.length
        >= TRAIL_CONFIG.maxImages
    ) {

        activeImages[0].remove();

    }


    // ====================================
    // GET NEXT PROJECT IMAGE
    // ====================================

    const image =
        document.createElement("img");


    image.className =
        "project-trail-image";


    image.src =
        trailImages[
            trailImageIndex
        ];


    image.draggable =
        false;


    trailImageIndex =
        (
            trailImageIndex + 1
        )
        % trailImages.length;


    // ====================================
    // RANDOM OFFSET
    // ====================================

    const offsetX =
        randomRange(
            -TRAIL_CONFIG.offsetX,
            TRAIL_CONFIG.offsetX
        );


    const offsetY =
        randomRange(
            -TRAIL_CONFIG.offsetY,
            TRAIL_CONFIG.offsetY
        );


    const rotation =
        randomRange(
            -TRAIL_CONFIG.rotation,
            TRAIL_CONFIG.rotation
        );


    const scale =
        randomRange(
            TRAIL_CONFIG.scaleMin,
            TRAIL_CONFIG.scaleMax
        );


    // ====================================
    // INITIAL POSITION
    // ====================================

    image.style.left =
        `${x + offsetX}px`;


    image.style.top =
        `${y + offsetY}px`;


    image.style.transform =
        `
        translate3d(-50%, -50%, 0)
        scale(${scale})
        rotate(${rotation}deg)
        `;


    projectTrail.appendChild(
        image
    );


    // ====================================
    // ENTER
    // ====================================

    requestAnimationFrame(() => {

        image.style.transition =
            `
            opacity 0.16s ease,
            transform 0.25s
            cubic-bezier(
                0.22,
                1,
                0.36,
                1
            )
            `;


        image.style.opacity =
            "1";


        image.style.transform =
            `
            translate3d(-50%, -50%, 0)
            scale(1)
            rotate(${rotation}deg)
            `;

    });


    // ====================================
    // EXIT
    // ====================================

    setTimeout(() => {

        image.style.transition =
            `
            opacity 0.45s ease,
            transform 0.65s
            cubic-bezier(
                0.22,
                1,
                0.36,
                1
            )
            `;


        image.style.opacity =
            "0";


        image.style.transform =
            `
            translate3d(
                -50%,
                calc(-50% - 18px),
                0
            )
            scale(0.88)
            rotate(${rotation * 1.5}deg)
            `;


        setTimeout(() => {

            image.remove();

        }, 500);

    }, TRAIL_CONFIG.lifetime);

}

// ========================================
// TRAIL MOUSE TRACKING
// ========================================

if (
    projectPanel &&
    projectTrail
) {

    projectPanel.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                projectPanel.getBoundingClientRect();


            // ====================================
            // GRID 1 → GRID 7
            // ====================================

            const gridMargin =
                window.innerWidth
                * 0.04;


            const gridGutter =
                window.innerWidth
                * 0.01;


            const totalGridWidth =
                window.innerWidth
                - (
                    gridMargin * 2
                );


            const columnWidth =
                (
                    totalGridWidth
                    - (
                        gridGutter * 11
                    )
                )
                / 12;


            /*
                Start:
                grid line 1

                End:
                grid line 7
            */

            const trailStart =
                gridMargin;


            const trailEnd =
                gridMargin
                + (
                    columnWidth * 6
                )
                + (
                    gridGutter * 6
                );


            const mouseX =
                event.clientX;


            const mouseY =
                event.clientY;


                // ====================================
                // TRAIL VERTICAL BOUNDS
                // ====================================

                const contentWrapper =
                    document.querySelector(
                        ".project-content-wrapper"
                    );

                if (!contentWrapper) return;

                const contentRect =
                    contentWrapper.getBoundingClientRect();

                const contentStyles =
                    window.getComputedStyle(
                        contentWrapper
                    );

                const trailTop =
                    contentRect.top
                    + parseFloat(
                        contentStyles.paddingTop
                    );

                const trailBottom =
                    contentRect.bottom
                    - parseFloat(
                        contentStyles.paddingBottom
                    );


                // ====================================
                // ONLY GRID 1 → GRID 7
                // AND ONLY CONTENT HEIGHT
                // ====================================

                if (
                    mouseX < trailStart ||
                    mouseX > trailEnd ||
                    mouseY < trailTop ||
                    mouseY > trailBottom
                ) {

                    hasTrailPosition =
                        false;

                    return;

                }


            // ====================================
            // FIRST MOVEMENT
            // ====================================

            if (
                !hasTrailPosition
            ) {

                lastTrailX =
                    mouseX;

                lastTrailY =
                    mouseY;

                hasTrailPosition =
                    true;

                return;

            }


            // ====================================
            // CHECK MOVEMENT DISTANCE
            // ====================================

            const moved =
                distance(
                    lastTrailX,
                    lastTrailY,
                    mouseX,
                    mouseY
                );


            if (
                moved
                <
                TRAIL_CONFIG.spawnDistance
            ) {

                return;

            }


            // ====================================
            // SPAWN
            // ====================================

            createTrailImage(
                mouseX,
                mouseY
            );


            lastTrailX =
                mouseX;

            lastTrailY =
                mouseY;

        }
    );


    // ====================================
    // RESET WHEN LEAVING PANEL
    // ====================================

    projectPanel.addEventListener(
        "mouseleave",
        () => {

            hasTrailPosition =
                false;

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
