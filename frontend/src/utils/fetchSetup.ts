// Setup global fetch override to add API key header for Hiro API requests
// This runs early to ensure all Hiro API calls include the API key
// which may be required for CORS to work properly

import { HIRO_API_KEY } from '../constants';

if (typeof window !== 'undefined' && HIRO_API_KEY) {
  const originalFetch = window.fetch;
  
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = typeof input === 'string' 
      ? input 
      : input instanceof URL 
        ? input.href 
        : input instanceof Request
          ? input.url
          : String(input);
    
    // Only add API key header for Hiro API requests
    if (url.includes('hiro.so')) {
      const headers = new Headers(init?.headers);
      headers.set('x-api-key', HIRO_API_KEY);
      
      return originalFetch(input, {
        ...init,
        headers,
      });
    }
    
    // For non-Hiro requests, use original fetch
    return originalFetch(input, init);
  };
  
  console.log('Hiro API key configured for fetch requests');
}

