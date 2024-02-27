//document.cookie = "firstName=SpongeBob; expires = Sun 1 december 2024 12:00:00 UTC; path=/";
//document.cookie = "lastName=SpongeBob; expires = Sun 1 december 2024 12:00:00 UTC path=/";

deleteCookie("firstName");

setCookie("email", "Sponge@gmail.com", 365);

console.log(document.cookie)

function setCookie(name, value, daysTolive){
    const date = new Date();
    date.setTime(date.getTime() + (daysTolive * 24 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path/`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    
}