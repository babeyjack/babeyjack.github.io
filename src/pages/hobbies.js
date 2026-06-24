export function createHobbiesPage(data) {
    const section = document.createElement('section')
    section.className = 'py-5'

    if (!data) {
        section.innerHTML = '<div class="container"><p>Loading profile data...</p></div>'
        return section
    }

    const hobbies = data.Hobbies || []

    let html = `
    <div class="container">
      <div class="mb-5">
        <h1 class="mb-4">Hobbies</h1>
      </div>
  `

    hobbies.forEach(hobby => {
        html += `
      <div class="hobby-item">
        <h5>${hobby.Title}</h5>
        <ul class="list-unstyled">
    `
        hobby.Details.forEach(detail => {
            html += `<li class="hobby-detail">✓ ${detail}</li>`
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
