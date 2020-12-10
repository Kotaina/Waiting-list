let isPopupFormOpen = false;
let newUserBtn = document.querySelector('.users-new');
let newUserForm = document.querySelector('.add-user')

if (!isPopupFormOpen) {
  newUserForm.classList.add('visually-hidden')
} else {
  newUserForm.classList.remove('visually-hidden')
}


newUserBtn.addEventListener('click', () => onNewUserBtnClick)