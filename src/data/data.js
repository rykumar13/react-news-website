const baseURL = "http://127.0.0.1:5000/";

export const getData = async () => {
  let data = await fetch(`${baseURL}`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
    },
  });
  data = await data.json();
  return JSON.parse(data);
};
