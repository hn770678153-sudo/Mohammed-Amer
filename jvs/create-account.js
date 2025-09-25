
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("passwordField");

if (togglePassword && passwordField) {
  togglePassword.addEventListener("click", () => {
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePassword.textContent = "🙈"; 
    } else {
      passwordField.type = "password";
      togglePassword.textContent = "👁"; 
    }
  });
}
const form = document.getElementById("signupForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    alert("تم إنشاء الحساب بنجاح ✅");
    
    window.location.href = "login.html";
  });
}