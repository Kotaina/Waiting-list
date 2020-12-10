function onSubmitBtnClick (data) {

const popupForm = document.querySelector('.form')
const newUserName = popupForm.querySelector('.form__name').value
const newUserEmail = popupForm.querySelector('.form__email').value
const newUserPhone = popupForm.querySelector('.form__phone').value
const newUserCity = popupForm.querySelector('.form__city').value
const newUserStreet = popupForm.querySelector
('.form__street').value


  let newUser = {
    id: usersData.length + 1,
    name: newUserName,
    email: newUserEmail,
    phone: newUserPhone,
    city: newUserCity,
    street: newUserStreet
  }
  
  usersData.push(newUser)
}