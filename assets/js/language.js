(function () {
  var supported = ["en", "es"];

  function getBrowserLanguage() {
    var browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || "en"];
    for (var i = 0; i < browserLanguages.length; i += 1) {
      var language = String(browserLanguages[i]).toLowerCase();
      if (language.indexOf("es") === 0) {
        return "es";
      }
    }

    return "en";
  }

  function getPreferredLanguage() {
    var saved = window.localStorage.getItem("site-language");
    if (supported.indexOf(saved) !== -1) {
      return saved;
    }

    return getBrowserLanguage();
  }

  function applyLanguage(language) {
    if (supported.indexOf(language) === -1) {
      language = "en";
    }

    document.documentElement.setAttribute("lang", language);
    document.body.setAttribute("data-current-lang", language);

    var title = document.querySelector("title[data-title-en][data-title-es]");
    if (title) {
      document.title = title.getAttribute("data-title-" + language);
    }

    var description = document.querySelector("meta[name='description'][data-description-en][data-description-es]");
    if (description) {
      description.setAttribute("content", description.getAttribute("data-description-" + language));
    }

    var labeledElements = document.querySelectorAll("[data-aria-label-en][data-aria-label-es]");
    labeledElements.forEach(function (element) {
      element.setAttribute("aria-label", element.getAttribute("data-aria-label-" + language));
    });

    var images = document.querySelectorAll("img[data-alt-en][data-alt-es]");
    images.forEach(function (image) {
      image.setAttribute("alt", image.getAttribute("data-alt-" + language));
    });

    var buttons = document.querySelectorAll("[data-set-lang]");
    buttons.forEach(function (button) {
      var isActive = button.getAttribute("data-set-lang") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function saveLanguagePreference(language) {
    if (language === getBrowserLanguage()) {
      window.localStorage.removeItem("site-language");
      return;
    }

    window.localStorage.setItem("site-language", language);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(getPreferredLanguage());

    var buttons = document.querySelectorAll("[data-set-lang]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var language = button.getAttribute("data-set-lang");
        applyLanguage(language);
        saveLanguagePreference(language);
      });
    });
  });
})();
