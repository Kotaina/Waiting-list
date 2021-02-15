const userTemplate = document.querySelector('#card-template');
const usersList = document.querySelector('.users__list');
const clientCounter = document.querySelector(".client-count");
console.log(usersList);

let usersData;


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


function serverEmulator() {
  usersData = [
    {
      id: 0,
      name: "Василий",
      email: "non",
      address: {
        city: "Moscow"
      },
      phone: "8686868454"
    },
    {
      id: 1,
      name: "Петр",
      email: "$$$$$",
      address: {
        city: "Tomsk"
      },
      phone: "6464646"
    },
    {
      id: 2,
      name: "Юрий",
      email: "ООООО",
      address: {
        city: "Khimki"
      },
      phone: "90902390"
    },
    {
      id: 3,
      name: "Jopa",
      email: "JopaJopa",
      address: {
        city: "Zajopinsk"
      },
      phone: "5858585885858"
    },
  ]
}

serverEmulator();
renderCard(usersData);


clientCounter.textContent = "(" + usersData.length + ")";