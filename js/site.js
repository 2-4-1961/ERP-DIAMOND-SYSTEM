// ====== دالة لتوزيع الروابط على أعمدة بناءً على عددها ======
function applyTwoCol() {
  var subNav1 = document.querySelectorAll(".sub-nav .group .links");

  subNav1.forEach(function (link) {
    if (link.children.length > 3 && link.children.length <= 6) {
      link.classList.add("two-col");
    } else if (link.children.length > 6 && link.children.length <= 9) {
      link.classList.add("three-col");
    } else if (link.children.length > 10) {
      link.classList.add("four-col");
    }
  });
}

// ====== دالة لإظهار وإخفاء الـ Sub-Navbar الرئيسي ======
function toggleSubNav(e) {
  e.preventDefault();

  var targetId = this.getAttribute("data-sub");
  var subNavs = document.querySelectorAll(".sub-nav");
  var navItems = document.querySelectorAll(".it1 a");

  var targetSub = document.getElementById(targetId);
  var isOpen = targetSub.style.display === "flex";

  // إزالة الكلاس النشط من كل التبويبات وإخفاء القوائم أولاً
  navItems.forEach(function (item) {
    item.classList.remove("active-tab");
  });
  subNavs.forEach(function (sub) {
    sub.style.display = "none";
  });

  // إذا لم تكن القائمة مفتوحة، قم بفتحها وتفعيل زرها
  if (!isOpen) {
    targetSub.style.display = "flex";
    this.classList.add("active-tab");
  }
}

// ====== ربط أحداث الأزرار الرئيسية ======
function initNavigation() {
  var navItems = document.querySelectorAll(".it1 a");

  navItems.forEach(function (item) {
    item.addEventListener("click", toggleSubNav);
  });
  // تم إزالة كود الفتح التلقائي لقسم Sales تماماً من هنا
}

// ====== تفعيل الروابط الفرعية عند النقر عليها ======
function initSubLinkActive() {
  const subLinks = document.querySelectorAll(".sub-nav .group a");
  subLinks.forEach((link) => {
    link.addEventListener("click", function () {
      subLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// ====== تشغيل الوظائف عند تحميل الصفحة ======
document.addEventListener("DOMContentLoaded", function () {
  applyTwoCol();
  initNavigation();
  initSubLinkActive();
});

// دالة لتحميل الصفحة في الـ contentArea
function loadPageContent(page) {
  fetch(page)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var content = document.getElementById("Areacontent");
      content.innerHTML = data;
      window.scrollTo(0, content.offsetTop);

      initModalEvents();
    })
    .catch(function (error) {
      document.getElementById("Areacontent").innerHTML = "<p>⚠️ خطأ في تحميل الصفحة</p>";
      console.error(error);
    });
}

// دالة لإعادة ربط أحداث المودال
function initModalEvents() {
  var modal = document.querySelector("#customerModal");
  var closeBtn = document.querySelector(".close");

  if (modal && closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
}

// دالة لتهيئة الروابط
function initLinks() {
  var loadPage1 = document.querySelectorAll(".loadPage");

  loadPage1.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var page = this.getAttribute("data-page");

      // setActiveLink(this, loadPage1);
      loadPageContent(page);
    });
  });
}

// تشغيل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  initLinks();
});
