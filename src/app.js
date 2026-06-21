import { createNav } from './components/navbar.js'
import { createHero } from './components/hero.js'
import { createProfilePage } from './pages/profile.js'
import { createProjectsPage } from './pages/projects.js'
import { createUniversityPage } from './pages/university.js'
import { loadJSON } from './utils/dataLoader.js'

let currentPage = 'home'
let profileData = null
let projectsData = null
let universityData = null
let mainContent = null

export async function initApp(container) {
    // Load data
    try {
        profileData = await loadJSON('/json/profile.json')
        projectsData = await loadJSON('/json/projects.json')
        universityData = await loadJSON('/json/uon.json')
    } catch (error) {
        console.error('Error loading data:', error)
    }

    // Create main layout
    container.innerHTML = `
    <div class="d-flex flex-column min-vh-100">
      <nav id="navbar"></nav>
      <main id="main-content" class="flex-grow-1"></main>
      <footer class="footer mt-auto">
        <div class="container">
          <p>&copy; 2024 Jack's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `

    const navbar = document.getElementById('navbar')
    mainContent = document.getElementById('main-content')

    // Create navigation
    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Profile', id: 'profile' },
        { label: 'Projects', id: 'projects' },
        { label: 'University', id: 'university' }
    ]

    const navElement = createNav(navItems, (pageId) => {
        currentPage = pageId
        renderPage()
    })
    navbar.appendChild(navElement)

    // Listen for navigation events from hero buttons
    window.addEventListener('navigate', (event) => {
        currentPage = event.detail.page
        // Update nav links active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active')
            if (link.textContent.toLowerCase() === currentPage.toLowerCase()) {
                link.classList.add('active')
            }
        })
        renderPage()
    })

    // Initial render
    renderPage()
}

function renderPage() {
    if (!mainContent) return

    mainContent.innerHTML = ''

    if (currentPage === 'home') {
        mainContent.appendChild(createHero())
    } else if (currentPage === 'profile') {
        mainContent.appendChild(createProfilePage(profileData))
    } else if (currentPage === 'projects') {
        mainContent.appendChild(createProjectsPage(projectsData))
    } else if (currentPage === 'university') {
        mainContent.appendChild(createUniversityPage(universityData))
    }
}
