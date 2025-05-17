export const login = async (username: string, password: string) => {
  const res = await fetch("http://localhost:3030/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    throw new Error(String(res.status));
  }
  return res.json();
};
