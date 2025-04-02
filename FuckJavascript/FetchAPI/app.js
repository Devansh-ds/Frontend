// let promise = new Promise((resolve, reject) => {
//   console.log("Hi from promise");
//   setTimeout(() => {
//     console.log("waiting...");
//     resolve("comp.");
//   }, 5000);
// });

// console.log(promise);

// promise.then((res) => {
//   console.log("fullfilled: ", res);
// });

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather");
      resolve("200 success");
    }, 2000);
  });
}

async function getWeather() {
  console.log("Start in");
  await api();
  console.log("End in");
}

console.log("Start");
getWeather();
console.log("End");

// async function hello() {
//   console.log("Hello");
//   await api();
// }
