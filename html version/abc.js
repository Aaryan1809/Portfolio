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

document.addEventListener("DOMContentLoaded", function () {
  // --- Theme Toggle ---
  const themeToggle = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const body = document.body;

  const applyTheme = (theme) => {
    body.dataset.theme = theme;
    sunIcon.style.display = theme === "light" ? "none" : "block";
    moonIcon.style.display = theme === "light" ? "block" : "none";
  };

  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const newTheme = body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // --- Navigation Scroll Effect ---
  const nav = document.querySelector(".navigation");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
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

  // --- Smooth Scrolling & Close Mobile Menu ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }

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
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Smooth Scrolling for all navigation buttons with data-target attribute ---
  const scrollLinks = document.querySelectorAll("button[data-target]");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Smoothly scroll to the target element
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // --- If on mobile, close the menu after clicking a link ---
        const mobileMenu = document.querySelector(".mobile-menu");
        const menuIcon = document.getElementById("menu-icon");
        const closeIcon = document.getElementById("close-icon");

        if (mobileMenu.style.display === "block") {
          mobileMenu.style.display = "none";
          menuIcon.style.display = "block";
          closeIcon.style.display = "none";
        }
      }
    });
  });

  // --- Mobile Menu Toggle Functionality ---
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  mobileMenuButton.addEventListener("click", () => {
    const isMenuOpen = mobileMenu.style.display === "block";
    if (isMenuOpen) {
      mobileMenu.style.display = "none";
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  });
});
