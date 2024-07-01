import { check } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "5s", target: 10 },
    { duration: "10s", target: 50 },
    { duration: "5s", target: 10 },
  ],
};
const params = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${__ENV.ACCESS_TOKEN}`,
  },
};

export default function () {
  const response = http.get(`${__ENV.BASE_URL}/top_rated`, params);
  let jsonResponse = JSON.parse(response.body);

  check(response, {
    "status is 200": (r) => r.status === 200,
    "results array is not empty": (r) => jsonResponse.results.length > 0,
  });
}