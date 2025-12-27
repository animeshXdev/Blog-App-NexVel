import { apiFetch } from "./api";
import { getCsrfCookie } from "./csrf";

export async function login(email: string, password: string) {
  await getCsrfCookie();

  const res = await apiFetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}

export async function register(data: {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
}) {
  await getCsrfCookie();

  const res = await apiFetch("/api/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Register failed");
  }

  return res.json();
}

export async function logout() {
  await apiFetch("/api/logout", { method: "POST" });
}

export async function getUser() {
  const res = await apiFetch("/api/user");
  if (!res.ok) return null;
  return res.json();
}
