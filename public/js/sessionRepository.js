const sessionURL = "sessions.json";

let sessionList = [];

// export default function getSessions() {
function getSessions() {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
      sessionList = e.target.response;
      resolve(sessionList);
    };
    oReq.open("GET", sessionURL, true);
    oReq.responseType = "json";
    oReq.send();
  });
}

export { getSessions as default, sessionURL };
export { sessionTemplate } from './template.js'
