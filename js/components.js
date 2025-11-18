class PhysComponents {
    static header() {
        const currentPath = window.location.pathname;
        
        const isActive = (pagePath) => {
            const normalize = (path) => path.replace(/\/$/, '').replace(/\/index\.html$/, '') || '/';
            return normalize(currentPath) === normalize(pagePath);
        };

        // Проверяем, находимся ли мы в разделе механики (включая подразделы)
        const isMechanicsSection = currentPath.startsWith('/home/mechanics');

        // Если мы в подразделе механики (но не на главной странице механики)
        if (isMechanicsSection && currentPath !== '/home/mechanics' && currentPath !== '/home/mechanics/') {
            return `
                <header>
                    <nav>
                        <a class="mp-nav-btn" href="/">Главная</a>
                        <a class="nav-btn" href="/home/mechanics">Механика</a>
                        <div class="subsections">
                            <a class="${isActive('/home/mechanics/kinematics') ? 'nav-btn active' : 'nav-btn'}" href="/home/mechanics/kinematics">Кинематика</a>
                            <a class="${isActive('/home/mechanics/dynamics') ? 'nav-btn active' : 'nav-btn'}" href="/home/mechanics/dynamics">Динамика</a>
                            <a class="${isActive('/home/mechanics/conservation_laws') ? 'nav-btn active' : 'nav-btn'}" href="/home/mechanics/conservation_laws">Законы сохранения</a>
                            <a class="${isActive('/home/mechanics/statics') ? 'nav-btn active' : 'nav-btn'}" href="/home/mechanics/statics">Статика</a>
                        </div>
                        <button class="theme-toggle" id="theme-toggle" title="Сменить тему">
                            🌙
                        </button>
                    </nav>
                </header>
            `;
        }

        // Обычная шапка для всех остальных страниц
        return `
            <header>
                <nav>
                    <a class="${isActive('/') ? 'mp-nav-btn active' : 'mp-nav-btn'}" href="/">Главная</a>
                    <a class="${isActive('/home/mechanics') ? 'nav-btn active' : 'nav-btn'}" href="/home/mechanics">Механика</a>
                    <a class="${isActive('/home/thermal_phen') ? 'nav-btn active' : 'nav-btn'}" href="/home/thermal_phen">Тепловые явления</a>
                    <a class="${isActive('/home/electrical_phen') ? 'nav-btn active' : 'nav-btn'}" href="/home/electrical_phen">Электрические явления</a>
                    <a class="${isActive('/home/optics') ? 'nav-btn active' : 'nav-btn'}" href="/home/optics">Оптика</a>
                    <a class="${isActive('/home/nuclear_phys') ? 'nav-btn active' : 'nav-btn'}" href="/home/nuclear_phys">Ядерная физика</a>
                    <button class="theme-toggle" id="theme-toggle" title="Сменить тему">
                        🌙
                    </button>
                </nav>
            </header>
        `;
    }

    static footer() {
        return `
            <footer>
                <p>PhysGenius &copy; 2025 | <span id="project-version"></span></p>
                <a href="https://github.com/PixlerStudioOfficial/physgenius" 
                   target="_blank" 
                   class="footer-link">
                    <svg class="github-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
                <a href="https://disk.yandex.ru/d/rQMOQNFBtY3g2A" 
                    target="_blank" 
                    class="footer-link">
                    <img src="/img/yandexdisk.png" alt="Яндекс Диск" class="yandex-disk-icon" width="26" height="18">
                    Яндекс Диск
                </a>
                <a href="https://drive.google.com/drive/folders/1Hjb4sWTpfr9OYsa8uxDi6UMnGvkhHV6C?usp=drive_link" 
                    target="_blank" 
                    class="footer-link">
                    <img src="/img/googledrive.png" alt="Google Drive" class="google-drive-icon" width="20" height="18">
                    Google Drive
                </a>
            </footer>
        `;
    }

    static pageTitle(title) {
        return `
            <div class="page-name">
                <h1>${title}</h1>
            </div>
        `;
    }

    static getPageTitle() {
        const currentPath = window.location.pathname;
        
        const titleMap = {
            '/': 'Главная',
            '/home/mechanics': 'Механика',
            '/home/mechanics/kinematics': 'Кинематика',
            '/home/mechanics/dynamics': 'Динамика',
            '/home/mechanics/conservation_laws': 'Законы сохранения',
            '/home/mechanics/statics': 'Статика и гидростатика',
            '/home/thermal_phen': 'Тепловые явления', 
            '/home/electrical_phen': 'Электрические явления',
            '/home/optics': 'Оптика',
            '/home/nuclear_phys': 'Ядерная физика'
        };
        
        const normalize = (path) => path.replace(/\/$/, '').replace(/\/index\.html$/, '') || '/';
        const normalizedPath = normalize(currentPath);
        return titleMap[normalizedPath] || 'PhysGenius';
    }
    
    static loadAll() {
        const pageTitle = this.getPageTitle();
        
        console.log('🔄 Загружаем компоненты для:', window.location.pathname);
        console.log('🎯 Активная страница:', pageTitle);
        
        const oldHeader = document.querySelector('header');
        const oldFooter = document.querySelector('footer');
        const oldPageName = document.querySelector('.page-name');
        
        if (oldHeader) oldHeader.remove();
        if (oldFooter) oldFooter.remove();
        if (oldPageName) oldPageName.remove();
        
        document.body.insertAdjacentHTML('afterbegin', this.header());
        
        const main = document.querySelector('main');
        if (main) {
            main.insertAdjacentHTML('beforebegin', this.pageTitle(pageTitle));
        }
        
        document.body.insertAdjacentHTML('beforeend', this.footer());
        
        console.log('✅ Компоненты загружены!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    PhysComponents.loadAll();
});