console.log("In app.js");

fetch("http://localhost:8081/auth/register", {
  method: "POST",
  body: JSON.stringify({
    fullname: "charity2",
    email: "c2@gmail.com",
    password: "c2",
    role: "CHARITY",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("Done");
