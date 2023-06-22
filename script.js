/* ================= SLIDER ====================== */
/* var slider = document.getElementById("myRange");
var output = document.getElementById("slider-value");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  var gradient =
    "linear-gradient(to right, #4ab9ba, #4ab9ba " +
    this.value +
    "%, #616161 " +
    this.value +
    "%, #616161)";
  this.style.background = gradient;
}; */
/* ==================== DROPDOWN ================= */

if ("NodeList" in window && !NodeList.prototype.forEach) {
  console.info("polyfill for IE11");
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const chooseModelButton = dropDownWrapper.querySelector(".basic-settings__dropdown"),
    chooseModelList = dropDownWrapper.querySelector(".basic-settings__dropdown__list"),
    chooseModelListItems = chooseModelList.querySelectorAll(".basic-settings__dropdown__list_item"),
    dropdownInput = dropDownWrapper.querySelector(".dropdown__input-hidden");

  chooseModelButton.addEventListener("click", function () {
    chooseModelList.classList.toggle("basic-settings__dropdown__list_vivsible");
  });

  chooseModelListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      chooseModelButton.innerText = this.innerText;
      dropdownInput.value = this.dataset.value;
      chooseModelList.classList.remove("basic-settings__dropdown__list_vivsible");
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== chooseModelButton) {
      chooseModelList.classList.remove("basic-settings__dropdown__list_vivsible");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      chooseModelList.classList.remove("basic-settings__dropdown__list_vivsible");
    }
  });
});
