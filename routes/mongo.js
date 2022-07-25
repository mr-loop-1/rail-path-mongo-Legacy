
var client = require('../database');

let a;
let shortestPath;
let shortestDist;
let destId;
let dists;


async function commonLine(id1, id2, coll) {

    const obj11 = await client.db('city').collection(coll).findOne({ "_id": id1 });
    const obj21 = await client.db('city').collection(coll).findOne({ "_id": id2 });

    const obj1 = obj11.color;
    const obj2 = obj21.color;

    for(const k in obj1) {
        if(k in obj2) {
            return Array.of({...obj1}, {...obj2}, k);
        }
    }
}

async function calculateDistance(id1, id2, coll) {

    const [obj1, obj2, k] = await commonLine(id1, id2, coll);
    console.log("get common", id1, id2, k);

    return obj2[k] > obj1[k] ? obj2[k] - obj1[k] : obj1[k] - obj2[k];

}


async function track(prevId, currId, targetIds, currPath, dist, coll) {

    if(dist > shortestDist) return;

    if(currId in dists && dist >= dists[currId]) {
        console.log('return 1');
        return;
    }
    // if(currId in dists) {
    dists[currId] = dist;

    
    const idxInPath = shortestPath.findIndex((item, idx, arr) => {
        if(item._id == currId) return true;
    });

    if(idxInPath != -1) {

        console.log('return 2');

        if(shortestPath[idxInPath].dist > dist) {
            shortestPath.splice(0, idxInPath, ...currPath);
        }
        return;
    }

    
    let next = await client.db('city').collection(coll).findOne({ "_id": currId });
    const nextIds = next.Link;

    const newCurrPath = [...currPath, {"_id": currId, "dist": dist}];


    if(targetIds.includes(currId)) {

        console.log('return 3');

        const distance = await calculateDistance(currId, destId, coll);
        console.log('calculated dist', distance);
        
        if(dist + distance < shortestDist) {

            console.log('return 4');

            newCurrPath.push({"_id": destId, "dist": dist+distance});
            shortestPath = [...newCurrPath];
            shortestDist = dist + distance;
        }
        return;
    }

    for (const nextId of nextIds) {

        if(nextId != prevId) {

            console.log('current nextId', nextId);

            const distance = await calculateDistance(currId, nextId, coll);
            await track(currId, nextId, targetIds, newCurrPath, dist+distance, coll);
        }
    }

    console.log("Shprtest Path ---------------\n",shortestPath, "Current Path ------------\n",newCurrPath);
    console.log('\n-----------------------\n-------------------------\n');

}




async function builder(arr, coll) {

    let build = [];
    // let 
    // build.push()
    let temp;
    console.log("final array",arr);

    for(let i=0; i!= arr.length-1; i++) {
        console.log(arr[i], arr[i+1]);
        const [obj1, obj2, k] = await commonLine(parseInt(arr[i]), parseInt(arr[i+1]), coll);

        if(obj1[k] < obj2[k]) {
            for(let j=obj1[k]; j!=obj2[k]; j++) {
                // console.log(obj1[k]);

                temp = await client.db('city').collection(coll).findOne({[`color.${k}`]: j});
                build.push(temp.Name);
            }
            
        }
        else {
            for(let j=obj1[k]; j!=obj2[k]; j--) {
                // console.log(obj1[k]);

                temp = await client.db('city').collection(coll).findOne({[`color.${k}`]: j});
                build.push(temp.Name);
            }
            
        }
    }

    temp = await client.db('city').collection(coll).findOne({ "_id": parseInt(arr[arr.length-1]) });
    build.push(temp.Name);

    return build;
}





module.exports = async function (start, dest, coll, cb) {

    a = [];
    shortestPath = [];
    shortestDist = 1000;

    dists = {};

    let target = await client.db('city').collection(coll).findOne({ "Name": dest });
    const targetIds = target.Link;

    destId = target._id;

    let begin = await client.db('city').collection(coll).findOne({ "Name": start });
    const beginIds = begin.Link;

    const startId = begin._id;

    const currPath = [{"_id": startId, "dist": 0}];


    console.log("beginIds", beginIds, "targetIds", targetIds);


    for (const beginId of beginIds) {

        console.log("curr beginId", beginId);
        
        const dist = await calculateDistance(startId, beginId, coll);

        await track(startId, beginId, targetIds, currPath, dist, coll);

    };
    a = shortestPath.map((item, idx, arr) => {
        return String(item._id);
    });

    
    const build = builder(a, coll);

    return build;
}