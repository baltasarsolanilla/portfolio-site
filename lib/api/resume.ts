import { API_ENDPOINTS } from './config';

export type ResumeResponse = {
  url: string;
};

export async function getResumeDownloadUrl(): Promise<string> {
  const response = await fetch(API_ENDPOINTS.resume, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to get resume: ${response.status}`);
  }

  const data: ResumeResponse = await response.json();
  return data.url;
}
