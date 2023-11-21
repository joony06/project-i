/** 씨발 왜 안되는거야 **/

import Swal from 'sweetalert2'

const Swal = require('sweetalert2')

const agent = window.navigator.userAgent.toLowerCase();
let browserName;

if (agent.indexOf("edge") > -1) {
  browserName = "MS Edge";
  Swal.fire({
    title: "경고!",
    text: "Google Chrome이 아닌 경우 에러가 발생할 수 있으니 가급적 Google Chrome으로 접속바랍니다.",
    icon: "warning"
  });
} else if (agent.indexOf("edg/") > -1) {
  browserName = "크로미움 기반 Edge";
  Swal.fire({
    title: "경고!",
    text: "Google Chrome이 아닌 경우 에러가 발생할 수 있으니 가급적 Google Chrome으로 접속바랍니다.",
    icon: "warning"
  });
} else if (agent.indexOf("opr") > -1 && !!window.opr) {
  browserName = "Opera";
  Swal.fire({
    title: "경고!",
    text: "Google Chrome이 아닌 경우 에러가 발생할 수 있으니 가급적 Google Chrome으로 접속바랍니다.",
    icon: "warning"
  });
} else if (agent.indexOf("chrome") > -1 && !!window.chrome) {
  browserName = "chrome";
} else if (agent.indexOf("trident") > -1) {
  browserName = "Internet explorer 11";
  Swal.fire({
    title: "경고!",
    text: "Google Chrome이 아닌 경우 에러가 발생할 수 있으니 가급적 Google Chrome으로 접속바랍니다.",
    icon: "warning"
  });
} else if (agent.indexOf("msie") > -1) {
  browserName = "Internet explorer";
  Swal.fire({
    title: "경고!",
    text: "Google Chrome이 아닌 경우 에러가 발생할 수 있으니 가급적 Google Chrome으로 접속바랍니다.",
    icon: "warning"
  });
} else if (agent.indexOf("firefox") > -1) {
  browserName = "firefox";
  Swal.fire({
    title: "경고!",
    text: "Google Chrome이 아닌 경우 에러가 발생할 수 있으니 가급적 Google Chrome으로 접속바랍니다.",
    icon: "warning"
  });
} else if (agent.indexOf("safari") > -1) {
  browserName = "safari";
  Swal.fire({
    title: "경고!",
    text: "Google Chrome이 아닌 경우 에러가 발생할 수 있으니 가급적 Google Chrome으로 접속바랍니다.",
    icon: "warning"
  });
} else {
  browserName = "other";
  Swal.fire({
    title: "경고!",
    text: "Google Chrome이 아닌 경우 에러가 발생할 수 있으니 가급적 Google Chrome으로 접속바랍니다.",
    icon: "warning"
  });
}
