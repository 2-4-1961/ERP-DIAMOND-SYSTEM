let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // جلب البيانات فورا عند الضغط للتحقق من آخر قيمة تم تخزينها
  let getUser = localStorage.getItem("username");
  let getPassword = localStorage.getItem("password");

  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill data");
  } else {
    // مقارنة ما كتبه المستخدم مع البيانات المخزنة
    if (getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value) {
      alert("✅ Login success, redirecting...");
      setTimeout(() => {
        // index-1.html
        window.location = "../index-1.html";
      }, 1500);
    } else {
      alert("❌ Username or password is wrong");
    }
  }
});
