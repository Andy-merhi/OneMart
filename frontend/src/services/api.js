// src/services/api.js
// API service for communicating with the backend

const API_BASE_URL = '/api'; // Proxied to https://localhost:7000/api

/**
 * Fetch wrapper with default error handling
 */
async function fetchApi(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

/**
 * GET request
 */
export async function get(endpoint) {
  return fetchApi(endpoint, { method: 'GET' });
}

/**
 * POST request
 */
export async function post(endpoint, data) {
  return fetchApi(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * PUT request
 */
export async function put(endpoint, data) {
  return fetchApi(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * DELETE request
 */
export async function remove(endpoint) {
  return fetchApi(endpoint, { method: 'DELETE' });
}

// Example usage:
// import { get, post } from './api'
//
// function MyComponent() {
//   const [data, setData] = useState(null);
//
//   useEffect(() => {
//     get('/weatherforecast')
//       .then(data => setData(data))
//       .catch(error => console.error(error));
//   }, []);
//
//   return <div>{/* render data */}</div>;
// }
