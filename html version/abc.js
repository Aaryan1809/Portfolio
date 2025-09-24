document.addEventListener("DOMContentLoaded", function () {
  // --- Navigation Scroll Effect ---
  const nav = document.querySelector(".navigation");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  mobileMenuButton.addEventListener("click", () => {
    const isMenuOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isMenuOpen ? "none" : "flex";
    menuIcon.style.display = isMenuOpen ? "block" : "none";
    closeIcon.style.display = isMenuOpen ? "none" : "block";
  });

  // --- Smooth Scrolling for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      // Special case for logo to scroll to top
      if (targetId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile menu after clicking a link
      if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
      }
    });
  });

  // --- Animate on Scroll using Intersection Observer ---
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});
