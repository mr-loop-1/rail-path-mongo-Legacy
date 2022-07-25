function fieldCheck() {
    var collec = document.querySelector('#collec');
    if(collec.value != "Select Station") {
        return true;
    }
    else {
        alert("Select a city first!!");
        return false;
    }
}