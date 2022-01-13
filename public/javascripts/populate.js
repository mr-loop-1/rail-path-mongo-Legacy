
// import client from '../../database';
/*
module.exports = async function(coll) {
    var select = document.getElementById("selectNumber");
    var lenn = await client.db('metro4').collection(coll).find({}).count;
    console.log("len = ",lenn);

    
    for(var i = 0; i < lenn; i++) {
        var opt = i+1;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}
*/

//const { options } = require("../../routes/users");
/*
function popu1(coun) {
    var select = document.getElementById("selectNumber");

    for(var i = 0; i < coun.length; i++) {
        var opt = coun[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
     //   select2.appendChild(select.cloneNode());
      //  select2.appendChild(el);
    }
}
function popu2(coun) {
    var select2 = document.getElementById("selectNumber");

    for(var i = 0; i < coun.length; i++) {
        var opt = coun[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select2.appendChild(el);
     //   select2.appendChild(select.cloneNode());
      //  select2.appendChild(el);
    }
}

function popu(coun) {
    popu1(coun);
    popu2(coun);
}
*/

function popu(coun) {
    var select = document.getElementById("selectNumber");
    var select2 = document.getElementById("selectNumber2");

    // console.log("popu = ",myColl);

   // var count = parseInt(coun);

  //  var arr;
    //client.db('metro4').collection('Station').find({}).toArray(function(err,a){
      //  arr = a.length;

        
    //})

  //  console.log("inpopu",coun);

    for(var i = 0; i < coun.length; i++) {
        var opt = coun[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
        select2.appendChild(el.cloneNode(true));
      //  select2.appendChild(el);
    }
    

    
    
}

// module.exports = popu;

/*
$(function popu(coun) {
    var elements = $('[id^="selectNumber"]');
    
    $.each(elements, function(index, value){
        var select = document.getElementById(elements[index]);

        for(var i = 0; i < coun.length; i++) {
            var opt = coun[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
          //  select2.appendChild(el);
        }
     });         
 });
 
/*
var select = document.getElementById("selectNumber");
    var options = ["1", "2", "3", "4", "5"];
    
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }


*/