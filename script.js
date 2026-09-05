const mobileCategoryBtn = document.getElementById("mobileCategoryBtn");
const mobileCategoryMenu = document.getElementById("mobileCategoryMenu");
const mobileCategoryLabel = document.getElementById("mobileCategoryLabel");
const mobileChevron = document.getElementById("mobileChevron");

const categoryButtons = document.querySelectorAll(".category-btn");

mobileCategoryBtn.addEventListener("click", () => {
  const isHidden = mobileCategoryMenu.classList.toggle("hidden");

  mobileChevron.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  mobileChevron.style.transition = "transform 180ms ease";
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    mobileCategoryLabel.textContent = button.textContent.trim();
    mobileCategoryMenu.classList.add("hidden");
    mobileChevron.style.transform = "rotate(0deg)";

    const category = button.dataset.category;

    if (category === "drinks") {
      document.getElementById("drinksMenu").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      document.getElementById("foodMenu").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
});

// Simple entrance animation
document.querySelectorAll(".menu-item, .food-image-wrap, .call-card").forEach((el, index) => {
  el.animate(
    [
      { opacity: 0, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 450,
      delay: Math.min(index * 25, 400),
      easing: "ease-out",
      fill: "both"
    }
  );
});
