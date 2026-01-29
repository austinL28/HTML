// Gets elements
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add hover listeners for menu
menuBtn.addEventListener('mouseenter', function() {
    dropdownMenu.classList.add('active');
});

menuBtn.addEventListener('mouseleave', function() {
    dropdownMenu.classList.remove('active');
});

dropdownMenu.addEventListener('mouseleave', function() {
    dropdownMenu.classList.remove('active');
});