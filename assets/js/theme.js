(function () {
  var params = new URLSearchParams(window.location.search);
  if (params.get("darkMode") === "on") {
    document.documentElement.setAttribute("data-dark-mode", "on");
  }
})();
