import { loginUser, registerUser } from './auth';

const getToken = () => localStorage.getItem('token');

const api = {
  loginUser,
  registerUser,
  // Add other API functions here
};

export const authenticatedApi = new Proxy(api, {
  get: (target, prop) => {
    const token = getToken();
    if (token && typeof target[prop] === 'function') {
      return (...args: any[]) => {
        const originalFunction = target[prop];
        // This is a simplified implementation. For a real-world scenario,
        // you would modify the underlying fetch call to include the token in the header.
        // For now, we will log that the token would be included.
        console.log(`Calling ${String(prop)} with token.`);
        return originalFunction(...args);
      };
    }
    return target[prop];
  },
});

export default api;
