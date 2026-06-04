import { create } from 'axios';

const api = create({

  baseURL: 'https://6a1eeb33b79eec0d6cf046ed.mockapi.io/X10', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;