/**
 * Theme Management Module
 * Handles Light/Dark mode toggling and persistence.
 */

const ThemeModule = {
    init: () => {
        const savedTheme = localStorage.getItem('maestro_theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        // Initialize Toggle Buttons (Desktop & Mobile)
        ThemeModule.bindToggles();
    },

    bindToggles: () => {
        const toggles = document.querySelectorAll('.theme-toggle-btn');
        toggles.forEach(btn => {
            btn.addEventListener('click', () => {
                ThemeModule.toggle();
            });
            ThemeModule.updateIcon(btn); // Set initial icon
        });
    },

    toggle: () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('maestro_theme', isDark ? 'dark' : 'light');

        // Update all toggle icons
        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            ThemeModule.updateIcon(btn);
        });

        // Trigger custom event for other modules (e.g. Canvas)
        const event = new CustomEvent('themeChanged', { detail: { isDark } });
        window.dispatchEvent(event);
    },

    updateIcon: (btn) => {
        const isDark = document.body.classList.contains('dark-mode');
        // Simple text/emoji switch for now. Can be replaced with SVG.
        btn.textContent = isDark ? '☀️' : '🌙';
        btn.title = isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro';
    },

    isDarkMode: () => {
        return document.body.classList.contains('dark-mode');
    }
};

export default ThemeModule;
