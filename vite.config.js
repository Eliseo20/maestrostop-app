import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                feed: resolve(__dirname, 'feed.html'),
                profile: resolve(__dirname, 'profile.html'),
                dashboard: resolve(__dirname, 'dashboard.html'),
                budget: resolve(__dirname, 'budget.html'),
                contract: resolve(__dirname, 'contract.html'),
                login: resolve(__dirname, 'login.html'),
                registration: resolve(__dirname, 'registration.html'),
                features: resolve(__dirname, 'features.html'),
                plans: resolve(__dirname, 'plans.html'),
                admin: resolve(__dirname, 'admin.html'),
                marketplace: resolve(__dirname, 'marketplace.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
                settings: resolve(__dirname, 'settings.html'),
                survey: resolve(__dirname, 'survey.html'),
                contracts: resolve(__dirname, 'contracts.html'),
            },
        },
    },
});
