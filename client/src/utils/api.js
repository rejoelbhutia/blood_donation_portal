
export const fetchWithAuth = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");
  
  const response = await fetch(`http://localhost:8000/api${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers
    }
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `HTTP ${response.status}`);
  }

  return await response.json();
};