(function () {
  const params = new URLSearchParams(window.location.search);
  const name = atob(decodeURIComponent(params.get("client")));
  const redirect = atob(decodeURIComponent(params.get("callback"))).safe();
  const channel = atob(decodeURIComponent(params.get("channel_id"))).safe();

  $("#name").innerText = name;

  function $(e) {
    return document.querySelector(e);
  }

  function onSuccess(response) {
    window.location.href = `${redirect}?authflow_token=${response.credential}&channel_id=${channel}`;
    $("#g-cap").style.opacity = "0.3";
    $("#g-cap").style.pointerEvents = "none";
  }

  window.onSuccess = onSuccess;
})();
