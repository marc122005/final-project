document.getElementById("languageSelect").addEventListener("change", function (event) {
  var selectedLanguage = event.target.value;

  // Change text based on the selected language
  if (selectedLanguage === "ar") {
    // Arabic translations
    document.querySelector(".get").textContent = "احصل على التطبيق";
    document.querySelector(".log").textContent = "تسجيل الدخول";
    document.querySelector(".my-profile").textContent = "الملف الشخصي";
    document.querySelector(".admin").textContent = "الإدارة";
    document.querySelector(".logout").textContent = "تسجيل الخروج";
    document.querySelector(".privacy").textContent = "إعدادات الخصوصية";

    // Sidebar
    document.querySelector(".home").textContent = "الصفحة الرئيسية";
    document.querySelector(".popular").textContent = "الأكثر شيوعاً";
    document.querySelector(".menu").textContent = "القائمة";
    document.querySelector(".trending").textContent = "الأكثر تداولاً";
    document.querySelector(".poll").textContent = "استطلاع";
    document.querySelector(".categories").textContent = "الأقسام";
    document.querySelector(".technology").textContent = "التكنولوجيا";
    document.querySelector(".gaming").textContent = "الألعاب";
    document.querySelector(".movies").textContent = "الأفلام";

  } else {
    // English translations
    document.querySelector(".get").textContent = "Get App";
    document.querySelector(".log").textContent = "Log In";
    document.querySelector(".my-profile").textContent = "My Profile";
    document.querySelector(".admin").textContent = "Admin";
    document.querySelector(".logout").textContent = "Log Out";
    document.querySelector(".privacy").textContent = "Privacy Settings";

    // Sidebar
    document.querySelector(".home").textContent = "Home";
    document.querySelector(".popular").textContent = "Popular";
    document.querySelector(".menu").textContent = "Menu";
    document.querySelector(".trending").textContent = "Trending";
    document.querySelector(".poll").textContent = "Poll";
    document.querySelector(".categories").textContent = "Categories";
    document.querySelector(".technology").textContent = "Technology";
    document.querySelector(".gaming").textContent = "Gaming";
    document.querySelector(".movies").textContent = "Movies";

  }
});
