import { getUsername, getPassword } from "../data/creds"

const fetch = require("node-fetch");
let base64 = require("base-64");

const baseURL = "https://dcoiul8283.execute-api.eu-west-2.amazonaws.com/dev";
let headers = new fetch.Headers();

headers.append("Authorization","Basic " + base64.encode(getUsername() + ":" + getPassword()));

export const getData = async () => {
  let data = await fetch(`${baseURL}`, {
    method: "GET",
    mode: 'no-cors',
    headers: headers,
  });
  data = await data.json();
  return data;
};
