var input = document.querySelector("input");
var response = decodeURIComponent((new URLSearchParams(window.location.search)).get('authflow_token'));
var notyf = new Notyf();

function decryptJWT(e) {
   try {
      const r = e.split(".")[0].replace("-", "+").replace("_", "/"),
         c = (JSON.parse(b64DecodeUnicode(r)), e.split(".")[1].replace("-", "+").replace("_", "/"));
      return JSON.parse(b64DecodeUnicode(c))
   } catch (e) {
      return console.error(e), !1
   }
}

// this is part of the code, too
function b64DecodeUnicode(e) {
   return decodeURIComponent(Array.prototype.map.call(atob(e), function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
   }).join(""))
}

input.value = btoa(JSON.stringify(decryptJWT(response)));

function copy() {
  input.select();
  input.setSelectionRange(0, 99999); /* For mobile devices */
  try {
  document.execCommand("copy");  
  } catch (err) {
    navigator.clipboard.writeText(input.value);
  }
  notyf.success('Copied response code'); 
}