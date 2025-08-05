const API_BASE_URL =
	import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const API_ENDPOINTS = {
	base: API_BASE_URL,
	documents: `${API_BASE_URL}/docs`,
	users: `${API_BASE_URL}/users`,
};
