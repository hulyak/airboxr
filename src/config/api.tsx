export const BASE_URL = "https://api.airboxr.com/data/dataStores";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwcGxpY2FudEBhaXJib3hyLmNvbSIsImlhdCI6MTYzMjI3NDU5MSwiZXhwIjoxNjMyMjc2MzkxfQ.SDmlUe_d_QSdMcfISFqLKR_wRXrSE2YsFrdFQ8JOeoc";

export async function apiGet() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((response) => response.json());
  return response;
}
