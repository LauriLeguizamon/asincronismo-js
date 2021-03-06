let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/";

function fetchData(api_url, callback) {
  let xhhtp = new XMLHttpRequest();
  xhhtp.open("GET", api_url, true);
  xhhtp.onreadystatechange = function (event) {
    if (xhhtp.readyState === 4) {
      if (xhhtp.status === 200) {
        callback(null, JSON.parse(xhhtp.responseText));
      } else {
        const error = new Error("Error" + api_url);
        return callback(error, null);
      }
    }
  };
  xhhtp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
