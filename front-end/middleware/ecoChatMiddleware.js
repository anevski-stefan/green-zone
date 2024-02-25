import {useCookie} from 'nuxt/app';

export default async function () {
    const accessTokenCookie = useCookie('accessToken');
    const userCookie = useCookie('user');

    const isValidAccessToken = (token) => {
        return true;
    };

    const isValidUserCookie = (userCookie) => {
        return true;
    };

    const hasValidAccessToken = Boolean(accessTokenCookie.value) && isValidAccessToken(accessTokenCookie.value);
    const hasValidUserCookie = Boolean(userCookie.value) && isValidUserCookie(userCookie.value);

    const isAuthenticated = hasValidAccessToken && hasValidUserCookie;

    if (!isAuthenticated) {
        return navigateTo('/login');
    }
}
