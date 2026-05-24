const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function fetchCompanies() {
  const response = await fetch(`${API_BASE_URL}/companies/`);
  return response.json();
}

export async function fetchEmissions() {
  const response = await fetch(`${API_BASE_URL}/emissions/`);
  return response.json();
}