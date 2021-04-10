const fetch = require("node-fetch");
let base64 = require("base-64");

const baseURL = "http://35.176.138.183/";
let username = "api_username";
let password = "api_password";
let headers = new fetch.Headers();

//headers.append('Content-Type', 'text/json');
headers.append(
  "Authorization",
  "Basic " + base64.encode(username + ":" + password)
);

export const getData = async () => {
  let data = await fetch(`${baseURL}`, {
    method: "GET",
    mode: 'no-cors',
    headers: headers,
  });
  data = await data.json();
  return JSON.parse(data);
};
