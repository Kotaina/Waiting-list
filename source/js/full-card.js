const fullUserTemplate = document.querySelector('#full-card__template');
const fullCard = document.querySelector('.full-card');

function openFullCard(id) {
    fullCard.classList.remove("visually-hidden");
    let currentUser = usersData[id];
    let newCard = fullUserTemplate.content.cloneNode(true);
    newCard.querySelector('.full-card__name').setAttribute('id', currentUser.id);
    newCard.querySelector('.full-card__name').textContent = currentUser.name;
    newCard.querySelector('.param__username').textContent = currentUser.username;
    newCard.querySelector('.param__email').textContent = currentUser.email;
    newCard.querySelector('.param__phone').textContent = currentUser.phone;
    newCard.querySelector('.param__company').textContent = currentUser.company.name;
    newCard.querySelector('.param__web').textContent = currentUser.website;
    newCard.querySelector('.param__zip').textContent = currentUser.address.zipcode;
    newCard.querySelector('.param__city').textContent = currentUser.address.city;
    newCard.querySelector('.param__street').textContent = currentUser.address.street;
    newCard.querySelector('.param__suite').textContent = currentUser.address.suite;
    return newCard;
}

function cardGenerator(id) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(openFullCard(id))
    fullCard.appendChild(fragment)
}

function cardClickHandler(evt) {
    let localCard = evt.target.closest(".user__card");
    if (localCard === null) return;
    let localName = localCard.querySelector(".user__name").id;
    console.log(localName);
    cardGenerator(localName - 1);
}

document.addEventListener("click", cardClickHandler);
