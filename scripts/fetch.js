

fetch('../scripts/projects.json')
  .then(response => response.json())
  .then(data => {
    getProjects(data);
  })
.catch(error => console.error('Error fetching projects:', error));


let projectsContainer = document.querySelector('.projects__content');
let projectTemplate = document.querySelector('#project-template');
let projectElement = projectTemplate.content;
function getProjects(projects) {
  projectsContainer.innerHTML = '';
  
  for (const [i, project] of Object.entries(projects)) {
    if (projectsContainer.classList.contains('home-projects')) {
      if (i >= 4) {
        break;
      }
    }
    let clone = document.importNode(projectElement, true);
  
    clone.querySelector('.projects__content__each__img').href = project.site;
    clone.querySelector('.projects__content__each__img img').src = project.image;
    clone.querySelector('.title').textContent = project.title;
    let int = document.createElement('i');
    clone.querySelector('.dev-links a:first-child').href = project.code;
    int.classList.add('fa-solid', 'fa-code');
    clone.querySelector('.dev-links a:first-child').prepend(int);

    clone.querySelector('.dev-links a:last-child').href = project.site;
    int.classList.add('fa-solid', 'fa-globe');
    clone.querySelector('.dev-links a:last-child').prepend(int)

    let toolsContainer = clone.querySelector('.tools');
    toolsContainer.innerHTML = '';
    project.tools.forEach(tool => {
      let toolEl = decideToolHTML(tool);
      toolsContainer.appendChild(toolEl);
    });
  
    projectsContainer.appendChild(clone);
  }
}

function decideToolHTML(tool) {
  let toolEl = document.createElement('i');
  switch (tool.toLowerCase()) {
    case 'html':
      toolEl.classList.add('fa-brands', 'fa-html5');
      break;
    case 'css':
      toolEl.classList.add('fa-brands', 'fa-css3-alt');
      break;
    case 'javascript':
      toolEl.classList.add('fa-brands', 'fa-js');
      break;
    case 'react':
      toolEl.classList.add('fa-brands', 'fa-react');
      break;
    case 'scss':
    case 'sass':
      toolEl.classList.add('fa-brands', 'fa-sass');
      break;
    default:
      toolEl.textContent = tool;
  }
  return toolEl;
}