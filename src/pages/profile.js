export function createProfilePage(data) {
    const section = document.createElement('section')
    section.className = 'py-5'

    if (!data) {
        section.innerHTML = '<div class="container"><p>Loading profile data...</p></div>'
        return section
    }

    const qualifications = data.Qualifications || []

    let html = `
    <div class="container">
      <div class="mb-5">
        <h1 class="mb-4">My Profile & Qualifications</h1>
      </div>
  `

    qualifications.forEach(qual => {
        html += `
      <div class="qualification-item">
        <h5>${qual.Title}</h5>
        <ul class="list-unstyled">
    `
        qual.Details.forEach(detail => {
            html += `<li class="qualification-detail">✓ ${detail}</li>`
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
