// Contract configuration - Mainnet (story-v2)
export const CONTRACT_ADDRESS = 'SP1HGXPGWSHPHW3PNC66FWQ5VG1PFNYKBCV82FWNK';
export const CONTRACT_NAME = 'story-v2';
export const NETWORK = 'mainnet' as const;
export const API_URL = 'https://api.hiro.so';


// Set this in your .env file as VITE_HIRO_API_KEY=your_api_key_here
export const HIRO_API_KEY = import.meta.env.VITE_HIRO_API_KEY || '';

