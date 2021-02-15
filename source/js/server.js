const requestURL = 'https://jsonplaceholder.typicode.com/users';
let serverData = [];
let usersData = [];

function oldResponse(url) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json'

    xhr.addEventListener("load", function (evt) {

        try {
            serverData = xhr.response;
            console.log(serverData);
        } catch (err) {
            console.error(err.message)
        }

    })

    xhr.open("GET", url);

    xhr.send();
}

oldResponse(requestURL);