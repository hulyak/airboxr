export const BASE_URL = "https://api.airboxr.com/data/dataStores";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwcGxpY2FudEBhaXJib3hyLmNvbSIsImlhdCI6MTYzMjE5MjA0MSwiZXhwIjoxNjMyMTkzODQxfQ.WVYCC0xD-4IAhzmLyA7fE-VZPyjGyfarSel-ANG-lUI";

export async function apiGet() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((response) => response.json());
  return response;
}
