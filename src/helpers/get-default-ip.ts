export async function getDefaultIp() {
  const configFetch: RequestInit = {
    method: "GET",
  };
  const response = await fetch(`https://ipapi.co/json/`, configFetch);
  return await response.json();
}
