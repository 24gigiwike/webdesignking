// ================================
// PORTFOLIO DATA
// ================================

const projects = [
    {
        id: "01",
        title: "CM26",
        category: "Luxury Fashion Website",
        url: "https://cm26.vercel.app/",
        tech: ["HTML", "CSS", "JavaScript"]
    },

    {
        id: "02",
        title: "Detailed Group",
        category: "Corporate Website",
        url: "https://www.detailedgroup.co/",
        tech: ["HTML", "CSS", "JavaScript"]
    },

    {
        id: "03",
        title: "Project Three",
        category: "Creative Website",
        url: "https://www.jovipants.com.ng/",
        tech: ["HTML", "CSS"]
    },

    {
        id: "04",
        title: "Project Four",
        category: "Business Website",
        url: "https://jeredengineering.com/",
        tech: ["HTML", "CSS"]
    },

    {
        id: "05",
        title: "Project Five",
        category: "Landing Page",
        url: "https://maison-donne.vercel.app/",
        tech: ["HTML", "CSS"]
    },

    {
        id: "06",
        title: "Project Six",
        category: "Portfolio Website",
        url: "https://www.broadbrand.com.ng/",
        tech: ["HTML", "CSS"]
    },

    {
        id: "07",
        title: "Project Seven",
        category: "Agency Website",
        url: "https://boyfromeden.vercel.app/",
        tech: ["HTML", "CSS"]
    },

    {
        id: "08",
        title: "Project Eight",
        category: "Brand Website",
        url: "https://growly-landingpage.vercel.app/",
        tech: ["HTML", "CSS"]
    },

    {
        id: "09",
        title: "Project Nine",
        category: "Brand Website",
        url: "https://www.molecatchgeosint.com/",
        tech: ["HTML", "CSS"]
    }
];


// ================================
// BUILD PROJECTS
// ================================

const container = document.getElementById("projects");

function createPortfolio() {

    let html = "";

    projects.forEach(project => {

        html += `

        <section class="project-card">

            <div class="project-window">

                <div class="window-preview">

                    <iframe
                        src="${project.url}"
                        loading="lazy">
                    </iframe>

                </div>

                <div class="window-footer">

                    <div class="project-meta">

                        <span class="project-number">
                            ${project.id}
                        </span>

                        <h2>
                            ${project.title}
                        </h2>

                        <p>
                            ${project.category}
                        </p>

                        <div class="project-tech">

                            ${project.tech.map(item => `
                                <span>${item}</span>
                            `).join("")}

                        </div>

                    </div>

                    <a
                        href="${project.url}"
                        target="_blank"
                        class="project-link">

                        Explore Website

                        <span>↗</span>

                    </a>

                </div>

            </div>

        </section>

        `;

    });

    container.innerHTML = html;

}

createPortfolio();