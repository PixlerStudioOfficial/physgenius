document.addEventListener('DOMContentLoaded', function() {
    highlightCurrentPage();
    addButtonHandlers();
});

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        if (button.href && button.href.includes(currentPath)) {
            button.classList.add('current');
        }
    });
}

function addButtonHandlers() {
    console.log('Сайт загружен успешно!');
}

function toggleInfo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}