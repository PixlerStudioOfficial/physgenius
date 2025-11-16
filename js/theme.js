class ThemeManager {
    static init() {
        this.loadTheme();
        this.setupToggle();
    }
    
    // Загружает сохраненную тему
    static loadTheme() {
        const savedTheme = localStorage.getItem('physgenius-theme') || 'light';
        this.setTheme(savedTheme);
    }
    
    // Устанавливает тему
    static setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('physgenius-theme', theme);
        this.updateToggleButton(theme);
    }
    
    // Переключает тему
    static toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
    
    // Настраивает кнопку переключения
    static setupToggle() {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
            
            // Обновляем иконку при загрузке
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            this.updateToggleButton(currentTheme);
        }
    }
    
    // Обновляет иконку кнопки
    static updateToggleButton(theme) {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.textContent = theme === 'light' ? '🌙' : '☀️';
            toggleButton.title = theme === 'light' ? 'Включить темную тему' : 'Включить светлую тему';
        }
    }
}

// Автоматическая инициализация
document.addEventListener('DOMContentLoaded', () => ThemeManager.init());