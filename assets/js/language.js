(function () {
  var supported = ["en", "es"];

  function getPreferredLanguage() {
    var saved = window.localStorage.getItem("site-language");
    if (supported.indexOf(saved) !== -1) {
      return saved;
    }

    var browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || "en"];
    for (var i = 0; i < browserLanguages.length; i += 1) {
      var language = String(browserLanguages[i]).toLowerCase();
      if (language.indexOf("es") === 0) {
        return "es";
      }
    }

    return "en";
  }

  function setLanguage(language) {
    if (supported.indexOf(language) === -1) {
      language = "en";
    }

    document.documentElement.setAttribute("lang", language);
    document.body.setAttribute("data-current-lang", language);
    window.localStorage.setItem("site-language", language);

    var buttons = document.querySelectorAll("[data-set-lang]");
    buttons.forEach(function (button) {
      var isActive = button.getAttribute("data-set-lang") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage(getPreferredLanguage());

    var buttons = document.querySelectorAll("[data-set-lang]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-set-lang"));
      });
    });
  });
})();
