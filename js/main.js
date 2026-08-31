document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var mentorButtons = document.querySelectorAll(".mentor-photo-btn");
  mentorButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".team-card");
      if (!card) return;
      var isOpen = card.classList.toggle("bio-open");
      btn.setAttribute("aria-expanded", isOpen);
      var hint = card.querySelector(".mentor-hint");
      if (hint) hint.textContent = isOpen ? "Hide bio −" : "Read bio +";
    });
  });

  var weekBoard = document.querySelector(".wk");
  if (weekBoard) {
    var dow = new Date().getDay();
    if (dow >= 1 && dow <= 5) {
      weekBoard.querySelectorAll('[data-day="' + dow + '"]').forEach(function (el) {
        el.classList.add("is-today");
      });
    }
  }

  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }
});
