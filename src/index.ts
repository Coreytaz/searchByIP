import "babel-polyfill";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  addOffset,
  addTileLayer,
  getAddress,
  getDefaultIp,
  validatIp,
} from "./helpers";
import icon from "../images/icon-location.svg";

const ipInput = document.querySelector(
  ".search-bar__input"
) as HTMLInputElement;
const btn = document.querySelector("button") as HTMLButtonElement;

const ipInfo = document.querySelector("#ip") as HTMLDivElement;
const locationInfo = document.querySelector("#location") as HTMLDivElement;
const timezoneInfo = document.querySelector("#timezone") as HTMLDivElement;
const ispInfo = document.querySelector("#isp") as HTMLDivElement;

btn?.addEventListener("click", getData);
ipInput?.addEventListener("keydown", handleKey);

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
});

const mapArea = document.querySelector(".map");
const map = L.map(mapArea, {
  zoom: 13,
  zoomControl: false,
});

function getData() {
  if (validatIp(ipInput?.value)) {
    getAddress(ipInput.value).then(setInfo);
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    getData();
  }
}

function setInfo(mapData) {
  const { latitude, longitude, city, country_name, time_zone, ip, isp } =
    mapData;

  ipInfo.innerText = ip;
  locationInfo.innerText = city + " " + country_name;
  timezoneInfo.innerText = time_zone.name;
  ispInfo.innerText = isp;

  map.setView([latitude, longitude]);
  L.marker([latitude, longitude], { icon: markerIcon }).addTo(map);

  if (matchMedia("(max-width: 1023px)").matches) {
    addOffset(map);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  addTileLayer(map);
  let { ip } = await getDefaultIp();
  getAddress(ip).then(setInfo);
});
