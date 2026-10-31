// ---------------------------------------------
// PROJECTS DATA
// Add a new project by adding one more object here.
// ---------------------------------------------
const projects = [
  {
    title: "Conference Ticket Generator",
    description: "Frontend Mentor challenge: fill in a form and get a generated conference ticket.",
    image: "https://res.cloudinary.com/dz209s6jk/image/upload/v1734612242/Challenges/c9o1buzwrz4kvvydxyv7.jpg",
    site: "https://ehiejakhian.github.io/Frontend-Mentor---Conference-ticket-generator/",
    code: "https://github.com/Ehiejakhian/Frontend-Mentor---Conference-ticket-generator",
    tools: ["fa-html5", "fa-sass", "fa-js"],
  },
  {
    title: "Aluminum Calc",
    description: "A pricing calculator for aluminum fabrication shops. Rebuilt in React for version two.",
    image: "../assets/images/projects/aluminum-calcs.png", // swap for your real screenshot
    site: "https://aluminum-calcs.github.io/aluminum-calcs-new/",
    code: "https://github.com/Aluminum-Calcs/aluminum-calcs-new",
    tools: ["fa-react", "fa-sass", "fa-js"],
  },
  {
    title: "SamLi Thrift",
    description: "An online thrift store with a shop page, filters, product cards and WhatsApp ordering.",
    image: "../assets/images/projects/samli-thrift.png", // swap for your real screenshot
    site: "#", // your live URL
    code: "#", // your repo URL
    tools: ["fa-react", "fa-sass", "fa-js"],
  },
];

// ---------------------------------------------
// RENDER PROJECTS
// ---------------------------------------------
const projectsContainer = document.querySelector(".projects__content");
const projectTemplate = document.getElementById("project-template");

function renderProjects(list) {
  if (!projectsContainer || !projectTemplate) return;

  const fragment = document.createDocumentFragment();

  list.forEach((p) => {
    const card = projectTemplate.content.cloneNode(true);

    card.querySelector(".title").textContent = p.title;
    card.querySelector("[data-desc]").textContent = p.description;

    const img = card.querySelector("[data-img]");
    img.src = p.image;
    img.alt = `${p.title} screenshot`;

    card.querySelectorAll("[data-site]").forEach((a) => (a.href = p.site));
    card.querySelector("[data-code]").href = p.code;

    const tools = card.querySelector("[data-tools]");
    p.tools.forEach((icon) => {
      const i = document.createElement("i");
      i.className = `fa-brands ${icon}`;
      tools.appendChild(i);
    });

    fragment.appendChild(card);
  });

  projectsContainer.appendChild(fragment);
}

renderProjects(projects);

// ---------------------------------------------
// YOUR EXISTING CODE
// ---------------------------------------------
let navBtn = document.querySelector('.nav-btn')
let nav = document.querySelector('nav')

let menuOpen = false
function openMenu() {
    if (menuOpen) {
        navBtn.classList.remove('open-a')
        nav.classList.remove('open-nav')
        menuOpen = false
        console.log('menu closed')
    } else {
        navBtn.classList.add('open-a')
        nav.classList.add('open-nav')
        menuOpen = true
        console.log('menu open')
    }
    return menuOpen
}

// Guarded: this page has no .nav-btn, so without the check this line
// would throw and stop everything below it from running.
if (navBtn) {
    navBtn.addEventListener('click', openMenu)
}

console.clear()
console.log(document.querySelectorAll('h2#greeting-el'))

// Comment form validation
const commentForm = document.getElementById('comment-form');
if (commentForm) {
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Get fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const comment = document.getElementById('comment');

    // Validate name
    if (name.value.trim() === '') {
      showError(name, 'Name is required.');
      isValid = false;
    } else {
      hideError(name);
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError(email, 'Please enter a valid email.');
      isValid = false;
    } else {
      hideError(email);
    }

    // Validate comment
    if (comment.value.trim() === '') {
      showError(comment, 'Comment cannot be empty.');
      isValid = false;
    } else {
      hideError(comment);
    }

    if (isValid) {
      // Simulate submission (since no backend)
      alert('Thank you for your comment!');
      console.log(name.value, email.value, comment.value);
      // Optionally, add the comment to the list
      addComment(name.value, email.value, comment.value);
      commentForm.reset();
    }
  });
}

function showError(input, message) {
  input.classList.add('error');
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  errorSpan.classList.add('show');
}

function hideError(input) {
  input.classList.remove('error');
  const errorSpan = input.nextElementSibling;
  errorSpan.classList.remove('show');
}

function addComment(name, email, text) {
  const commentsList = document.getElementById('comments-list');
  const commentDiv = document.createElement('div');
  commentDiv.className = 'comment';
  commentDiv.innerHTML = `
    <div class="comment-author">${name}</div>
    <div class="comment-date">${new Date().toLocaleString()}</div>
    <div class="comment-text">${text}</div>
  `;
  commentsList.appendChild(commentDiv);
}