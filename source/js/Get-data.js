// XHR + Promise case

const requestURL = 'https://jsonplaceholder.typicode.com/users';
let usersData = [];
const clientCounter = document.querySelector(".client-count");

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = 'json'
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }
    xhr.onerror = () => {
      reject(xhr.response)
    }
    xhr.send()
  })
}

function counter() {
  clientCounter.textContent = "(" + usersData.length + ")";
}

sendRequest('GET', requestURL)
  .then(data => {
    usersData = data;
    counter();
    renderCard(usersData);
  })
  .catch(err => console.log(err));
