let addUserBtn = document.querySelector(".users__new");
let popup = document.querySelector(".add-user");
let popupCloseBtn = popup.querySelector(".add-user__button-close");

let isPopupOpen;

let onPopupCloseBtnClick = function () {
  addUserBtn.removeEventListener("click", onPopupCloseBtnClick);
  popup.classList.add("visually-hidden");
  addUserBtn.addEventListener("click", onAddUserBtnClick);
}

let onAddUserBtnClick = function () {
  addUserBtn.removeEventListener("click", onAddUserBtnClick)
  popupCloseBtn.addEventListener("click", onPopupCloseBtnClick)
  popup.classList.remove("visually-hidden");
}

addUserBtn.addEventListener("click", onAddUserBtnClick)