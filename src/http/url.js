
const host = 'https://router.project-osrm.org'
const searchParams = new URLSearchParams({steps:'true' , geometries: 'geojson' ,overview: 'full' });

export async function fetchRoute (fromLat, fromLng, beforeLat, beforeLng) {
    const response = await fetch(`${host}/route/v1/driving/${fromLng},${fromLat};${beforeLng},${beforeLat}?${searchParams}`)
    return response.json()
}

