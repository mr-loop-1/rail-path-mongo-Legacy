
var client = require('../database');

module.exports = async function(coll) {
    var a = [];
    var val;

    var arr = await client.db('city').collection(coll).find().toArray();
    for(var i=0; i<arr.length; i++) {
	//	printjson(arr[i].Name);
        val = String(arr[i].Name)
		a.push(val);
    }
    console.log("fil = ",a);

    return a;
}