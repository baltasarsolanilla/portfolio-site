const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = {
  resume: `${API_BASE_URL}/resume`,
} as const;
