document.getElementById("languageSelect").addEventListener("change", function(event) {
  var selectedLanguage = event.target.value;

  // تغيير النصوص بناءً على اللغة المختارة
  if (selectedLanguage === "ar") {
    // تغيير النصوص للعربية
    document.querySelector(".get").textContent = "احصل على التطبيق";
    document.querySelector(".log").textContent = "تسجيل الدخول";
    document.querySelector(".px-2 i").textContent = "الملف الشخصي";
    document.querySelector(".admin").textContent = "الإدارة";
    document.querySelector(".px-2 a[href='privacy.html']").textContent = "إعدادات الخصوصية";
    document.querySelector(".logout").textContent = "تسجيل الخروج";
  } else {
    // تغيير النصوص إلى الإنجليزية
    document.querySelector(".get").textContent = "get app";
    document.querySelector(".log").textContent = "log in";
    document.querySelector(".px-2 i").textContent = "My Profile";
    document.querySelector(".admin").textContent = "Admin";
    document.querySelector(".px-2 a[href='privacy.html']").textContent = "Privacy settings";
    document.querySelector(".logout").textContent = "Log out";
  }
});
