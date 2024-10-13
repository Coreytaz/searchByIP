export async function getAddress(ip = "8.8.8.8") {
  const response = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=6a2ac94f186243789a54c09ee72cc774&ip=${ip}&lang=ru`
  );
  return await response.json();
}
