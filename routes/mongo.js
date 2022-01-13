//var path = require('path');
//var client = require( path.resolve( __dirname, "./database.js" ) );
var client = require('../database');
/*
async function recur(prev, curr, dest, collection, a) {

    //	printjson("\n",prev, curr, dest, "\n");
        let arr = [];
        const r1 = await collection.findOne({"_id":curr});
        console.log("r = ",r1);
        arr = r1.Link;
        console.log("arr = ",arr);
    
        for(let i=0; i<arr.length; i++) {
            
            let neighbor = arr[i];
    
            if(neighbor == prev) {
                continue;
            }
            else if(neighbor == dest) {
                console.log("dest = ",dest);
                console.log("d = ",curr);
                const r2 = await collection.findOne({"_id":dest});
                a.push(r2.Name);
                const r3 = await collection.findOne({"_id":curr});
                a.push(r3.Name);
                return 1;
            }
            else {
                if(await recur(curr, neighbor, dest,collection, a )) {
                    console.log("h = ",curr);
                    const r4 = await collection.findOne({"_id":curr});
                    a.push(r4.Name);
                    return 1;
                }
            }
        }
        return 0;
    }
    */
    async function recur(prev, curr, dest, coll, a) {

        //	printjson("\n",prev, curr, dest, "\n");
        console.log('Reached here again');
        console.log("c ",curr,"d ",dest,"coll ",coll);
            let arr = [];
            const r1 = await client.db('city').collection(coll).findOne({"Name":curr});
            console.log("r = ",r1);
            arr = r1.Link;
            console.log("arr = ",arr);
        
            for(let i=0; i<arr.length; i++) {
                
                let n = await client.db('city').collection(coll).findOne({"_id":arr[i]});
                console.log("n = ",n);
                let neighbor = n.Name;
        
                if(neighbor == prev) {
                    continue;
                }
                else if(neighbor == dest) {
                    console.log("dest = ",dest);
                    console.log("d = ",curr);
                    const r2 = await client.db('city').collection(coll).findOne({"Name":dest});
                    a.push(r2.Name);
                    const r3 = await client.db('city').collection(coll).findOne({"Name":curr});
                    a.push(r3.Name);
                    return 1;
                }
                else {
                    if(await recur(curr, neighbor, dest,coll, a )) {
                        console.log("h = ",curr);
                        const r4 = await client.db('city').collection(coll).findOne({"Name":curr});
                        a.push(r4.Name);
                        return 1;
                    }
                }
            }
            return 0;
        }
        
    
    module.exports = async function(curr, dest, coll) {
        console.log('Reached here too');
        console.log("c ",curr,"d ",dest,"coll ",coll);

     //   console.log(client);
     // var collection  = context.services.get("mongodb-atlas").db("metro4").collection("Station");
     // await context.functions.execute("recur" ,0, curr, dest, a, collection);
    //  let collection = client.db('metro4').collection(coll);
      var a = [];

      await recur(0,curr,dest,coll, a);
      console.log("array = ",a);
      return a;
    }