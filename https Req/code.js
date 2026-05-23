const axios = require("axios");
// async function main() {
//   const response = await axios.post(
//     " https://httpdump.app/dumps/8c0777fb-3384-4c2f-b86e-8b36cc91db6f/?a=3&b=7",
//     {
//       Headers: {
//         Gmail: "Piyush3440@gmail.com",
//         password: "1234567",
//       },
//       body: {
//         authentication: "pr jain",
//       },
//     },
//   );
// }
// main();
async function main() {
  const response = await fetch(
    "https://httpdump.app/dumps/8c0777fb-3384-4c2f-b86e-8b36cc91db6f",
    {
      method: "POST",
      body: {
        gmail: "Piyush Kumawat",
        password: "122354",
      },
      Headers: {
        authentication: "haktit singh",
      },
    },
  );
  const res = await response.json();
}
main();
