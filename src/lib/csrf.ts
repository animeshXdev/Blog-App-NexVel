export async function getCsrfCookie() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is missing");
  }

  await fetch(`${API_URL}/sanctum/csrf-cookie`, {
    credentials: "include",
  });
}
