// Основные функции для сайта
document.addEventListener('DOMContentLoaded', function() {
    // Подсветка текущей страницы в навигации
    highlightCurrentPage();
    
    // Добавление обработчиков для кнопок
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
    // Можно добавить дополнительные обработчики при необходимости
    console.log('Сайт загружен успешно!');
}

// Функция для показа/скрытия дополнительной информации
function toggleInfo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}


// версия
const PROJECT_VERSION = "0.3.0-alpha";
document.addEventListener('DOMContentLoaded', function() {
    const versionElement = document.getElementById('project-version');
    if (versionElement) {
        versionElement.textContent = `Версия: ${PROJECT_VERSION}`;
    }
});