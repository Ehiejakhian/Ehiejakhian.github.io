console.log(document.querySelector('.main-content').classList);

fetch('/scripts/projects.json')
  .then(response => response.json())
  .then(data => {
    getProjects(data);
  })
.catch(error => console.error('Error fetching projects:', error));


let projectsContainer = document.getElementsByClassName('more__projects');
function getProjects(projects) {
  projectsContainer[0].innerHTML = '';
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    project.class.map(cls => projectElement.classList.add(cls));
    //projectElement.className = project.class[0];
    projectElement.innerHTML = `
      <a href="${project.site}">
        <img src="${project.image}" alt="projectImg">
      </a>
      <h2 id="project-title">${project.title}</h2>
      <div class="project-details">
        <div class="dev">
          <a href="${project.code}">View Code</a>
          <a href="${project.site}">View Site</a>
        </div>
        <div class="tools">
          ${project.tools.map(tool => {
            const tagClass = tool === 'javascript' ? 'js' : tool.toLowerCase();
            return `<span class="${tagClass}-tag">${tool}</span>`;
          }).join('')}
        </div>
      </div>
    `;
    projectsContainer[0].appendChild(projectElement);
  });
}