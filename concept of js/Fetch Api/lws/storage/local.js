//value set in local storage
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

//value get from local storage
function getLocalStorage(key) {
    alert(localStorage.getItem(key));
}

//data remove from local storage
function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

function clearLocalStorage() {
    localStorage.clear();
}
