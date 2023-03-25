(function () {
  const URIparams = new URLSearchParams(window.location.search);

  String.prototype.safe = function () {
    return this.split("")
      .join("")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replaceAll("javascript:", "")
      .replaceAll("data:", "");
  };

  if (
    URIparams.get("client") &&
    URIparams.get("callback") &&
    URIparams.get("channel_id")
  ) {
  } else {
    authError(602);
  }
  if (location.protocol !== "https:") {
    location.replace(
      `https:${location.href.substring(location.protocol.length)}`
    );
  }
  window.addEventListener("load", (event) => {
    document.getElementById("g-cap").style.opacity = "1";
    document.getElementById("g-cap").style.pointerEvents = "all";
  });

  function authError(msg, errorid) {
    document.body.innerHTML = `
  <img src="/assets/logo.svg" style="height: 60px;">
  <h1>Error while loading login screen</h1>
  <p>Please contact the webmaster of the site that redirected you here and provide the following information:</p>
  <pre style="font-family: monospace; white-space: pre-wrap;  white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap;border: 1px solid black;padding: 10px 15px;border-radius: 5px;"><code style="font-family: monospace;">AuthFlow Screen Error #${
    errorid || "600"
  } (see bit.ly/3Wm8sdm)</code></pre>`;
  }

  if (window.self !== window.top) {
    authError(601);
  }

  try {
    var params = new URLSearchParams(window.location.search);
    var redirect = new URL(
      atob(decodeURIComponent(params.get("callback"))).safe()
    ).hostname;
  } catch (e) {
    authError(604);
  }

  if (window.getIsBlocked == "Y") {
    authError(603);
  }

  sessionStorage.setItem("latestVisitedScreen", location.href);

  console.log(
    "%c🛑 STOP!",
    "color:red; font-size:60px; font-weight: bold;-webkit-text-stroke: 1px black;background-color: yellow;padding-left:30px;padding-right:30px;border-radius: 10px;"
  );
  console.log(
    "%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.\n\n%cDON'T PASTE CODE YOU DO NOT UNDERSTAND",
    "font-size: 20px;",
    "font-size: 20px;font-weight: bold;text-decoration: underline;background-color: red;color: white;"
  );
})();
