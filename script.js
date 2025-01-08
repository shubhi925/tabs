const tabBtns = document.querySelectorAll(".tabBtn");
const contentBoxes = document.querySelectorAll(".tabContent");

tabBtns.forEach((tabBtn, btnIndex) => {
  tabBtn.addEventListener("click", () => showContent(btnIndex));
});

function showContent(btnIndex) {
  tabBtns.forEach((tabBtn, index) => {
    if (index === btnIndex) {
      tabBtn.classList.add("bg-teal-400", "text-white", "border-0");
      tabBtn.classList.remove(
        "bg-gray-200",
        "text-gray-600",
        "border",
        "border-gray-300"
      );
    } else {
      tabBtn.classList.remove("bg-teal-400", "text-white", "border-0");
      tabBtn.classList.add(
        "bg-gray-200",
        "text-gray-600",
        "border",
        "border-gray-300"
      );
    }
  });

  contentBoxes.forEach((contentBox, boxIndex) => {
    if (boxIndex === btnIndex) contentBox.classList.remove("hidden");
    else contentBox.classList.add("hidden");
  });
}
