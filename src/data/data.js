const baseURL = "http://127.0.0.1:5000/";

export const getData = async () => {
  let data = await fetch(`${baseURL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  data = await data.json();
  console.log(data);
  return data;
};
