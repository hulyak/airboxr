export const BASE_URL = "https://api.airboxr.com/data/dataStores";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwcGxpY2FudEBhaXJib3hyLmNvbSIsImlhdCI6MTYzMjAxOTQzNSwiZXhwIjoxNjMyMDIxMjM1fQ.bEyJ5PB1gakK28C8W-wYNLZNaA8WKivZshcw7VdLTQA";

export async function apiGet() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((response) => response.json());
  return response;
}
