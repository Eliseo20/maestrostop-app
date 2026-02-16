/**
 * Centralized Routing Configuration
 * Defines the mapping between routes and HTML files.
 * Used for reference and potential client-side navigation logic.
 */
export const routes = {
    '/': 'index.html',
    '/feed': 'feed.html',
    '/dashboard': 'dashboard.html',
    '/budget': 'budget.html',
    '/contract': 'contract.html',
    '/profile': 'profile.html'
};

export function navigateTo(route) {
    if (routes[route]) {
        window.location.href = routes[route];
    } else {
        console.error('Route not found:', route);
    }
}
