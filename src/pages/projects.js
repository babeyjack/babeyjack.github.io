export function createProjectsPage(data) {
    const section = document.createElement('section')
    section.className = 'py-5'

    if (!data) {
        section.innerHTML = '<div class="container"><p>Loading projects data...</p></div>'
        return section
    }

    const projects = data.Projects || []

    let html = `
    <div class="container">
      <h1 class="mb-5">My Projects</h1>
      <div class="row g-4">
  `

    projects.forEach((project, index) => {
        const progLangs = project.Details.ProgLang ? project.Details.ProgLang.join(', ') : 'N/A'
        const description = project.Description ? project.Description[0] : 'No description available'
        const link = project.Link && project.Link !== '¬uni' ? project.Link : '#'
        const modalId = `projectModal${index}`

        html += `
      <div class="col-md-6 col-lg-4">
        <div class="project-card h-100 d-flex flex-column" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#${modalId}">
          <div class="project-header">
            <h5 class="mb-2">${project.Name}</h5>
            <p class="mb-0 small">${project.Title}</p>
          </div>
          <div class="project-body flex-grow-1">
            <p>${description.substring(0, 150)}...</p>
            <div class="mb-3">
              <strong>Tech Stack:</strong><br>
              ${project.Details.ProgLang.map(lang => `<span class="tech-badge">${lang}</span>`).join('')}
            </div>
            <div class="small text-muted">
              <p><strong>Updated:</strong> ${project.Details.Updated || 'N/A'}</p>
              <p><strong>Version:</strong> ${project.Details.Version || 'N/A'}</p>
            </div>
          </div>
          <div class="pt-3 border-top">
            <button class="btn btn-sm btn-primary w-100" onclick="event.stopPropagation();">
              View Details
            </button>
          </div>
        </div>
      </div>

      <!-- Modal for ${project.Name} -->
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header bg-light">
              <div>
                <h5 class="modal-title">${project.Name}</h5>
                <p class="text-muted small mb-0">${project.Title}</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${project.Screenshots && project.Screenshots.length > 0 ? `
              <div class="mb-4">
                <h6 class="text-muted text-uppercase">Screenshots</h6>
                <div class="row g-3">
                  ${project.Screenshots.map(img => `
                    <div class="col-md-6">
                      <img src="${img}" alt="Project screenshot" class="img-fluid rounded" style="max-height: 300px; object-fit: cover; width: 100%;">
                    </div>
                  `).join('')}
                </div>
              </div>
              ` : ''}
              <div class="mb-4">
                <h6 class="text-muted text-uppercase">Description</h6>
                ${project.Description.map(para => `<p class="mb-3">${para}</p>`).join('')}
              </div>

              <div class="row mb-4">
                <div class="col-md-6">
                  <h6 class="text-muted text-uppercase">Tech Stack</h6>
                  <div>
                    ${project.Details.ProgLang.map(lang => `<span class="tech-badge">${lang}</span>`).join('')}
                  </div>
                </div>
                <div class="col-md-6">
                  <h6 class="text-muted text-uppercase">Project Details</h6>
                  <ul class="list-unstyled small">
                    <li><strong>Code:</strong> ${project.Details.ProgLang ? project.Details.ProgLang.join(', ') : 'N/A'}</li>
                    <li><strong>Updated:</strong> ${project.Details.Updated || 'N/A'}</li>
                    <li><strong>Version:</strong> ${project.Details.Version || 'N/A'}</li>
                    ${project.Details.Platforms ? `<li><strong>Platform:</strong> ${project.Details.Platforms}</li>` : ''}
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              ${link !== '#' ? `<a href="${link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View on GitHub</a>` : ''}
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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

    section.innerHTML = html
    return section
}
