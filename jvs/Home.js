document.addEventListener("DOMContentLoaded", () => {

  //  تغيير لون 
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "linear-gradient(135deg, #1e3a8a, #0f172a)";
      header.style.transition = "background 0.4s";
    } else {
      header.style.background = "linear-gradient(135deg, #0f172a, #1e3a8a)";
    }
  });

  const profilePic = document.querySelector(".profile-pic");
  if (profilePic) {
    profilePic.addEventListener("mouseenter", () => {
      profilePic.style.transform = "scale(1.05)";
      profilePic.style.transition = "transform 0.3s ease";
      profilePic.style.boxShadow = "0px 10px 25px rgba(0,0,0,0.4)";
    });

    profilePic.addEventListener("mouseleave", () => {
      profilePic.style.transform = "scale(1)";
      profilePic.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.3)";
    });

    profilePic.addEventListener("click", () => {
      alert("هذه صورة محمد عمار محمد عامر 🌟");
    });
  }

  // 3 
  const links = document.querySelectorAll("ul li a");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#0f172a";
    });
    link.addEventListener("mouseleave", () => {
      link.style.color = "#1e3a8a";
    });
  });

  // 4. رسالة ترحيب في الكونسول
  console.log("مرحبًا بك في موقع محمد عمار محمد عامر 🌟");

});