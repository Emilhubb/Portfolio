const configuredApiUrl = process.env.NEXT_PUBLIC_API_URL?.trim();

// The API origin is public information. Keep production configuration explicit
// so a missing Vercel variable never silently targets the visitor's localhost.
export const API_URL = (
  configuredApiUrl ||
  (process.env.NODE_ENV === "development" ? "http://localhost:5000" : "")
).replace(/\/+$/, "");
