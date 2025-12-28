
let navBtn = document.querySelector('.nav-btn')
navBtn.addEventListener('click', openMenu)

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
      commentForm.reset();
      // Optionally, add the comment to the list
      addComment(name.value.trim(), email.value.trim(), comment.value.trim());
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