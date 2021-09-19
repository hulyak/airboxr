export const BASE_URL = "https://api.airboxr.com/data/dataStores";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwcGxpY2FudEBhaXJib3hyLmNvbSIsImlhdCI6MTYzMjA4NDU2NSwiZXhwIjoxNjMyMDg2MzY1fQ.-RqrRxBILENuzQTJ74WfyuLD9wFMXDJaMsMxa-iDo4I";

export async function apiGet() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((response) => response.json());
  return response;
}
