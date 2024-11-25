// Toggles the sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-300px"; // Hide sidebar
    } else {
      sidebar.style.left = "0px"; // Show sidebar
    }
  }
  
  // Initializes the map using Leaflet.js
  const map = L.map("map").setView([52.360373, 4.859594], 18);
  
  // Adds OpenStreetMap tiles to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 17, // Recommended maximum zoom level
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
  
  // Defines a custom icon for the map marker
  const customIcon = L.icon({
    iconUrl: "/frontend/icons/icons-location.svg", // Path to your custom icon
    iconSize: [40, 50], // Size of the icon [width, height]
    iconAnchor: [35, 70], // Point of the icon that will correspond to marker's location [x, y]
    popupAnchor: [-14, -70], // Point from which the popup should open relative to the icon [x, y]
  });
  
  // Adds a marker with the custom icon and a popup
  L.marker([52.360373, 4.859594], { icon: customIcon })
    .addTo(map)
    .bindPopup("1054 XE Amsterdam")
    .openPopup();
  
  // Adds interactivity to feature list items
  const featureLinks = document.querySelectorAll(".feature-links li");
  
  featureLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Removes 'active' class from all items
      featureLinks.forEach((item) => item.classList.remove("active"));
  
      // Adds 'active' class to the clicked item
      link.classList.add("active");
    });
  });
  
  // Adds interactivity to filter items like the search bar and dropdowns
  const filterItems = document.querySelectorAll(
    ".filter-section .search-bar, .filter-section .select-menu .select-btn"
  );
  
  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Removes 'clicked' class from all items
      filterItems.forEach((el) => el.classList.remove("clicked"));
  
      // Adds 'clicked' class to the clicked item
      item.classList.add("clicked");
    });
  });
  