export function createHero() {
  const section = document.createElement('section')
  section.className = 'hero-section'

  const html = `
    <div class="container">
      <h1>Welcome to My Portfolio</h1>
      <p>Multi-talented Developer | Computer Science Student | Tech Enthusiast</p>
      <div>
        <button id="qualification-btn" class="btn btn-light btn-lg me-3">View Qualifications</button>
        <button id="projects-btn" class="btn btn-outline-light btn-lg">See Projects</button>
      </div>
    </div>
  `

  section.innerHTML = html

  // Add event listeners for buttons
  section.querySelector('#qualification-btn').addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'qualifications' } }))
  })

  section.querySelector('#projects-btn').addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'projects' } }))
  })

  return section
}
