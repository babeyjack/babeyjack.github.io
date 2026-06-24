export function createUniversityPage(data) {
  const section = document.createElement('section')
  section.className = 'py-5'

  if (!data) {
    section.innerHTML = '<div class="container"><p>Loading university data...</p></div>'
    return section
  }

  const years = Object.keys(data)

  let html = `
    <div class="container">
      <div class="mb-5">
        <h1 class="mb-3">University of Nottingham</h1>
        <p class="lead">BSc Computer Science with Year in Industry</p>
      </div>
  `

  years.forEach(yearKey => {
    const modules = data[yearKey]
    const yearLabel = yearKey.replace(/([A-Z])/g, ' $1').trim()

    html += `
      <div class="mb-5">
        <h2 class="mb-4" style="border-bottom: 3px solid var(--primary-color); padding-bottom: 1rem; display: inline-block;">${yearLabel}</h2>
        <div class="row g-4">
    `

    modules.forEach(module => {
      const convenorsList = module.Convenors
        .map(c => `<a href="${c.Link}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-none">${c.Name}</a>`)
        .join(', ')

      const scoreDisplay = module.Score !== 'N/A'
        ? `<strong>Score:</strong> <span class="badge bg-success">${module.Score}</span>`
        : '<strong>Score:</strong> <span class="text-muted">N/A</span>'

      const semesterDisplay = module.Semester !== "0"
        ? `<strong>Semester:</strong> ${module.Semester}`
        : '<strong>Type:</strong> Full Year'

      html += `
        <div class="col-lg-6">
          <div class="card h-100 module-card">
            <div class="card-header bg-light">
              <h5 class="mb-2">${module.ModuleName}</h5>
              <div class="small text-muted">
                <strong>${module.ModuleCode}</strong> • ${module.Credits} Credits
              </div>
            </div>
            <div class="card-body">
              <div class="mb-3">
                ${module.Description.map(para => `<p class="mb-2">${para}</p>`).join('')}
              </div>

              <div class="module-meta">
                <p class="mb-2">${semesterDisplay}</p>
                <p class="mb-2">${scoreDisplay}</p>
                <p class="mb-0">
                  <strong>Convenor${module.Convenors.length > 1 ? 's' : ''}:</strong><br>
                  ${convenorsList}
                </p>
              </div>
            </div>
          </div>
        </div>
      `
    })

    html += `
        </div>
      </div>
    `
  })

  html += `
    </div>
  `

  section.innerHTML = html
  return section
}
