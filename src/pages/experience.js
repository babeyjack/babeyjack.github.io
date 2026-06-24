export function createExperiencePage(data) {
  const section = document.createElement('section')
  section.className = 'py-5'

  if (!data) {
    section.innerHTML = '<div class="container"><p>Loading profile data...</p></div>'
    return section
  }

  const experiences = data.Experience || []

  let html = `
    <div class="container">
      <div class="mb-5">
        <h1 class="mb-4">Experience</h1>
      </div>
  `

  experiences.forEach(exp => {
    html += `
      <div class="experience-item">
        <h5>${exp.Title}</h5>
        <ul class="list-unstyled">
    `
    exp.Roles.forEach(role => {
      html += `<l class="experience-detail"> <div class=mb-2> ${role.RoleTitle} </div>
            <div class=small text-muted> ${role.RoleDates} </div>
            <ul class="list-unstyled">
            `
      role.Details.forEach(roleDetail => {
        html += `<li class="experience-detail">✓ ${roleDetail}</li>`
      })

      html += `</ul></li>`
    })
    html += `
        </ul>
      </div>
    `
  })

  html += `
    </div>
  `

  section.innerHTML = html
  return section
}
