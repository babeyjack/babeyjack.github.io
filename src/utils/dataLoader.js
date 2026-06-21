export async function loadJSON(path) {
    try {
        const response = await fetch(path)
        if (!response.ok) {
            throw new Error(`Failed to load ${path}: ${response.statusText}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Error loading JSON:', error)
        return null
    }
}
