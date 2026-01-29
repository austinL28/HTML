// Gets elements
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add click listener for menu
menuBtn.addEventListener('click', function() {
    dropdownMenu.classList.toggle('active');
});

// Close menu when clicking anywhere else on the page
document.addEventListener('click', function(event) {
    if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
});