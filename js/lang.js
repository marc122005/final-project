document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("language-select");

  // تحميل اللغة المختارة سابقًا (لو موجودة)
  const savedLang = localStorage.getItem("siteLanguage") || "en";
  document.documentElement.lang = savedLang;
  langSelect.value = savedLang;

  // عند تغيير اللغة
  langSelect.addEventListener("change", () => {
    const selectedLang = langSelect.value;
    document.documentElement.lang = selectedLang;
    localStorage.setItem("siteLanguage", selectedLang);
  });
});

