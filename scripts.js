mapboxgl.accessToken = 'pk.eyJ1IjoieWloYW5zaGkiLCJhIjoiY2x1dTg1MHJlMDczNTJpbnF6cHE5YzFrMCJ9.4PKv0tFZmlb_hLlZBm1fgQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-73.9822, 40.753597], // Centered on Bryant Park
    zoom: 10
});

// Information about the sites
const places = [
    {
        coordinates: [-73.9743, 40.7644],
        description: '<strong>Paley Park</strong><p>Near Fifth Avenue, prioritizes visitors needs with movable chairs and a soothing waterfall. Its serene atmosphere offers a spiritual retreat in the heart of New York City.</p>',
        icon: 'https://assets-global.website-files.com/581110f944272e4a11871c01/59371a6f0ccd8d78aca85db0_Paley-Park-Tree-Canopy.jpg'
    },
    {
        coordinates: [-73.9832, 40.753597],
        description: '<strong>Bryant Park</strong><p>Revamped in the 1980s, is a bustling urban oasis with a central green, game tables, and food kiosks. Its vibrant ambiance attracts locals, workers, and tourists alike.</p>',
        icon: 'https://park.marmaranyc.com/hs-fs/hubfs/Explore%20Widget/Bryant%20Park.jpg?width=2000&height=1333&name=Bryant%20Park.jpg'
    },
    {
        coordinates: [-73.9818, 40.7532],
        description: '<strong>New York Public Library</strong><p>Blends elegance with accessibility, welcoming all with its stunning architecture and inclusive design. Inside, a regal reading room mirrors European palaces, while outside, various spaces foster community engagement and connection.</p>',
        icon: 'https://loving-newyork.com/wp-content/uploads/2016/06/new-york-public-library-180508105745004.jpg'
    },
    {
        coordinates: [-73.9772, 40.7527],
        description: '<strong>Grand Central Terminal</strong><p>The world\'s largest train station, guides commuters with ease through its grand entrances to the iconic Main Concourse. Its bustling yet serene atmosphere makes it a quintessential New York landmark.</p>',
        icon: 'https://mymodernmet.com/wp/wp-content/uploads/2021/03/grand-central-terminal-nyc-1.jpg'
    }
];

// Add markers to the map
places.forEach(function(place) {
    // Create a DOM element for each marker
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = `url(${place.icon})`;
    el.style.width = `50px`;
    el.style.height = `50px`;

    // Create popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(place.description);

    // Add marker to map
    new mapboxgl.Marker(el)
        .setLngLat(place.coordinates)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
});
