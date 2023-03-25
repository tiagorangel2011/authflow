(function () {
  function g(link) {
    const blockedData = [];
    blockedData.forEach((e) => {
      if (e == link) {
        return "Y";
      }
    });
    return false;
  }
  window.getIsBlocked = g;
})();
