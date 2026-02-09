// Auth utility functions
// TODO: Implement with your preferred auth solution (NextAuth, Clerk, custom, etc.)

export const AUTH_COOKIE_NAME = 'auth-token';

// Set auth cookie (call after successful login)
export function setAuthCookie(token: string) {
  document.cookie = `${AUTH_COOKIE_NAME}=${token}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
}

// Remove auth cookie (call on logout)
export function removeAuthCookie() {
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0`;
}

// Check if user is authenticated (client-side)
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return document.cookie.includes(AUTH_COOKIE_NAME);
}

// Get auth token from cookie
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`${AUTH_COOKIE_NAME}=([^;]+)`));
  return match ? match[1] : null;
}
