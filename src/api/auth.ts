const BASE_URL = import.meta.env.VITE_BASE_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

const apiRequest = async (url: string, options: RequestInit = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...getAuthHeaders(),
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Request failed');
  }

  return response.json();
};

export const loginUser = async (email: string, password: string) => {
  return apiRequest(`${BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
};

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  phoneNumber: string,
  address: string,
  profile: string,
  userType: string
) => {
  return apiRequest(`${BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify({
      Name: name,
      email,
      password,
      Phone_Number: phoneNumber,
      address,
      Profile: profile,
      userType,
    }),
  });
};

export const getUser = async () => {
  return apiRequest(`${BASE_URL}/getUser`);
};
