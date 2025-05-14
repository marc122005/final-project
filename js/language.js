document.getElementById("languageSelect").addEventListener("change", function(event) {
  var selectedLanguage = event.target.value;

  // تغيير النصوص بناءً على اللغة المختارة
  if (selectedLanguage === "ar") {
    // تغيير النصوص للعربية
    document.querySelector(".get").textContent = "احصل على التطبيق";
    document.querySelector(".log").textContent = "تسجيل الدخول";
    document.querySelector(".my-profile").textContent = "الملف الشخصي";
    document.querySelector(".admin").textContent = "الإدارة";
    document.querySelector(".logout").textContent = "تسجيل الخروج";
    document.querySelector(".privacy").textContent = " الاعددات الخصوصية";
     // sidebar 
    document.querySelector(".home").textContent = "الصفحه الرئيسية";
    document.querySelector(".popular").textContent = "الأكثر شيوعاً";
    document.querySelector(".menu").textContent = "القائمه";
    document.querySelector(".trending").textContent = "الأكثر تداولا";
    document.querySelector(".poll").textContent = "استطلاع";
    document.querySelector(".categories").textContent = "الأقسام";
    document.querySelector(".technology").textContent = "التكنولوجيا";
    document.querySelector(".gaming").textContent = "الألعاب";
    document.querySelector(".movies").textContent = "الأفلام";
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
