//  DropDown Menu
document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector("#dropdownBtn");
  const dropdownMenu = document.querySelector("#dropdownMenu");

  dropdownBtn.addEventListener("click", function () {
    event.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
  });

  //   Klik di luar dropdownMenu
  document.addEventListener("click", function (event) {
    if (
      !dropdownBtn.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add("hidden");
    }
  });

  const scrollContainer = document.querySelector(".w-full.overflow-x-auto");
  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
});
