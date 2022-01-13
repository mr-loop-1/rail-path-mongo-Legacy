
var client = require('../database');

async function recur(prev, curr, dest, coll, a) {

    let arr = [];
    const r1 = await client.db('city').collection(coll).findOne({ "Name": curr });

    arr = r1.Link;


    for (let i = 0; i < arr.length; i++) {

        let n = await client.db('city').collection(coll).findOne({ "_id": arr[i] });
        let neighbor = n.Name;

        if (neighbor == prev) {
            continue;
        }
        else if (neighbor == dest) {

            const r2 = await client.db('city').collection(coll).findOne({ "Name": dest });
            a.push(r2.Name);
            const r3 = await client.db('city').collection(coll).findOne({ "Name": curr });
            a.push(r3.Name);
            return 1;
        }
        else {
            if (await recur(curr, neighbor, dest, coll, a)) {

                const r4 = await client.db('city').collection(coll).findOne({ "Name": curr });
                a.push(r4.Name);
                return 1;
            }
        }
    }
    return 0;
}


module.exports = async function (curr, dest, coll) {
    var a = [];

    await recur(0, curr, dest, coll, a);
    return a;
}