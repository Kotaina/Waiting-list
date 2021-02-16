const userTemplate = document.querySelector('#card-template');
const usersList = document.querySelector('.users__list');
const clientCounter = document.querySelector(".client-count");

let createCard = function (user) {
  let card = userTemplate.content.cloneNode(true);
  card.querySelector('.user__name').setAttribute('id', user.id);
  card.querySelector('.user__name').textContent = user.name;
  card.querySelector('.user__email').textContent = user.email;
  card.querySelector('.user__city').textContent = user.address.city;
  card.querySelector('.user__phone').textContent = user.phone;
  return card;
}

function renderCard(usersData) {
  var fragment = document.createDocumentFragment();
  for (let i = 0; i < usersData.length; i++) {
    fragment.appendChild(createCard(usersData[i]))
  }
  usersList.appendChild(fragment)
}

clientCounter.textContent = "(" + usersData.length + ")";