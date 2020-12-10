let isPopupFormOpen = false;
let newUserBtn = document.querySelector('.users-new');
let newUserForm = document.querySelector('.add-user')
let submitBtn = document.querySelector('.form__button')

if (!isPopupFormOpen) {
  newUserForm.classList.add('visually-hidden')
} else {
  newUserForm.classList.remove('visually-hidden')
}


newUserBtn.addEventListener('click', () => isPopupFormOpen = !isPopupFormOpen)


submitBtn.addEventListener('click', onSubmitBtnClick)
