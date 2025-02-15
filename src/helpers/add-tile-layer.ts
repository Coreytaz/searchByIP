import L from "leaflet";

export function addTileLayer(map) {
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGNncmFtb3RhIiwiYSI6ImNrcnV3dTltMzAwejgycG94M2tweXE1MHEifQ.BZdgYPtA2ToBKRod8Mficg",
    {
      attribution:
        'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/Coreytaz" target="_blank">Coreytaz</a>.',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);
}
