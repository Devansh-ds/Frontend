const URL = "https://dattebayo-api.onrender.com/characters";

const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data)
};

console.log("hi");
getFacts();
