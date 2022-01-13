function fieldCheck() {
    var collec = document.querySelector('#collec');
    if(collec.value != "Select Station") {
        return true;
    }
    else {
        alert("Select a city first!!");
       // event.preventDefault();
       // document.getElementById('userform').reset();
        return false;
    }
}