export function createNav(navItems, onNavClick) {
    const nav = document.createElement('nav')
    nav.className = 'navbar navbar-expand-lg navbar-dark'

    nav.innerHTML = `
    <div class="container">
      <a class="navbar-brand" href="#">
        Jack's Portfolio
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto" id="nav-list"></ul>
      </div>
    </div>
  `

    const navList = nav.querySelector('#nav-list')
    navItems.forEach((item, index) => {
        const li = document.createElement('li')
        li.className = 'nav-item'

        const a = document.createElement('a')
        a.className = 'nav-link'
        a.href = '#'
        a.textContent = item.label
        a.dataset.pageId = item.id

        a.addEventListener('click', (e) => {
            e.preventDefault()
            // Update active state
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'))
            a.classList.add('active')
            onNavClick(item.id)
        })

        if (index === 0) {
            a.classList.add('active')
        }

        li.appendChild(a)
        navList.appendChild(li)
    })

    return nav
}
