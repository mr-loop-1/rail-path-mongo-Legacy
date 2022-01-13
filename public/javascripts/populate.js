
function popu(coun) {
    var select = document.getElementById("selectNumber");
    var select2 = document.getElementById("selectNumber2");

    for(var i = 0; i < coun.length; i++) {
        var opt = coun[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
        select2.appendChild(el.cloneNode(true));
    }  
}
