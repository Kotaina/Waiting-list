let addUserBtn = document.querySelector(".users__new");
let popup = document.querySelector(".add-user");

isPopupOpen = false;

function popupToggler() {
  if (isPopupOpen) {
    console.log("turn on")
    popup.classList.add("visually-hidden")
  }
}

addUserBtn.addEventListener("click", function () {
  isPopupOpen = !isPopupOpen;
  console.log(isPopupOpen)
})

popupToggler()