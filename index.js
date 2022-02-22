const projectHolder = document.querySelector('.projects-holder');
const filterButtons = document.querySelectorAll('.btn')
const projects = [
    {
        name : 'Swift Blueboook Renew',
        desc : 'Swift Bluebook Renew is a bluebook renewing website which we developed for college minor project-I. We used php as core-backend technology, plain html and css for frontend.',
        imgUrl : './assets/sbr.png',
        githubUrl : 'https://github.com/GCES-Batch-2018-Minor-project-group/Minor_Project_SBR',
        type : 'college-project'
    },
    {
        name : 'Sportmeet App',
        desc : 'Sport Meet Web App is a PWA designed and developed by student of GCES for GCES sport meet program. The primary goal of this Web App is to reduce the manual work from annual sport meet hosting batch. I used node js in this project for backend.',
        imgUrl : './assets/sport.png',
        githubUrl : 'https://github.com/Minify-It-services/sports-meet-app',
        type : 'others'
    }
]
function renderProjects(type){
    let filteredProjects = projects

    if(type !== 'all'){
        filteredProjects = projects.filter(project => project.type === type)
    }
    projectHolder.innerHTML = ''
    filteredProjects.map(project => {
        projectHolder.innerHTML += `
            <div class="project-holder">
                <div>
                    <img src="${project.imgUrl}" alt="${project.name}">
                </div>
                <div>
                    <h3>${project.name}</h3>
                    <p>${project.desc}</p>
                        <a class="github-link" href="https://github.com/GCES-Batch-2018-Minor-project-group/Minor_Project_SBR"><i class="lni lni-git"></i> Source code</a>
                </div>
            </div>
        `
    })
}
function filterProject(i, type){
    filterButtons.forEach(fb => fb.classList.remove('btn-active'))
    filterButtons[i].classList.add('btn-active')
    renderProjects(type)
}
renderProjects('all')