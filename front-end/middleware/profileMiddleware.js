import { useCookie } from 'nuxt/app';

export default async function ({ app, route }) {
    console.log('Middleware redirectAuthenticated is being executed.');

    // Now you can access the router safely
    const accessTokenCookie = useCookie('accessToken');
    const userCookie = useCookie('user');

    const isValidAccessToken = (token) => {
        return true; // You need to implement your token validation logic here
    };

    const isValidUserCookie = (userCookie) => {
        return true; // You need to implement your user cookie validation logic here
    };

    const hasValidAccessToken = Boolean(accessTokenCookie.value) && isValidAccessToken(accessTokenCookie.value);
    const hasValidUserCookie = Boolean(userCookie.value) && isValidUserCookie(userCookie.value);

    const isAuthenticated = hasValidAccessToken && hasValidUserCookie;

    if (!isAuthenticated) {
        // Redirect to login page if not authenticated
        return navigateTo('/');
    }
}
