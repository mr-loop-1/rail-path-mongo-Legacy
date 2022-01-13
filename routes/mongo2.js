
var client = require('../database');

module.exports = async function(coll) {
    var a = [];
    var val;

    var arr = await client.db('city').collection(coll).find().toArray();
    for(var i=0; i<arr.length; i++) {
        val = String(arr[i].Name)
		a.push(val);
    }

    return a;
}