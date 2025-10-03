// Sample course data
const courses = [
  {
    id: 1,
    title: "Intro to Web Development",
    description: "Learn HTML, CSS, and JavaScript fundamentals",
    lessons: 12,
    duration: "4 hours",
    completed: false
  },
  {
    id: 2,
    title: "Python Basics",
    description: "Master Python programming essentials",
    lessons: 8,
    duration: "3 hours",
    completed: false
  },
  {
    id: 3,
    title: "Data Visualization",
    description: "Create charts with D3.js",
    lessons: 6,
    duration: "2.5 hours",
    completed: false
  }
];

// State management
let currentUser = null;
let courseState = JSON.parse(localStorage.getItem('courseState')) || {};

// Render functions
function renderHome() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="course-grid">
      ${courses.map(course => `
        <div class="course-card" onclick="showCourseDetail(${course.id})">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${courseState[course.id]?.progress || 0}%"></div>
          </div>
          <small>${course.lessons} lessons • ${course.duration}</small>
        </div>
      `).join('')}
    </div>
  `;
}

function showCourseDetail(courseId) {
  const course = courses.find(c => c.id === courseId);
  const progress = courseState[courseId]?.progress || 0;
  
  document.getElementById('main-content').innerHTML = `
    <article class="course-detail">
      <button onclick="renderHome()" class="button">← Back to Courses</button>
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <button 
        class="button button-primary" 
        onclick="toggleCourseComplete(${courseId})"
      >
        ${courseState[courseId]?.completed ? 'Completed ✓' : 'Mark Complete'}
      </button>
      <h3>Lessons</h3>
      <ul class="lesson-list">
        ${Array(course.lessons).fill().map((_, i) => `
          <li>Lesson ${i + 1} ${i < (progress/100 * course.lessons) ? '✓' : ''}</li>
        `).join('')}
      </ul>
    </article>
  `;
}

// Core functionality
function toggleCourseComplete(courseId) {
  const currentState = courseState[courseId] || { completed: false, progress: 0 };
  currentState.completed = !currentState.completed;
  currentState.progress = currentState.completed ? 100 : 0;
  courseState[courseId] = currentState;
  localStorage.setItem('courseState', JSON.stringify(courseState));
  showCourseDetail(courseId);
}

// Auth functionality
function showAuthModal(type) {
  document.getElementById('modal-title').textContent = type === 'login' ? 'Login' : 'Sign Up';
  document.getElementById('auth-modal').style.display = 'block';
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  currentUser = { email };
  closeAuthModal();
  renderHome();
}

function closeAuthModal() {
  document.getElementById('auth-modal').style.display = 'none';
}

// Initial render
renderHome();