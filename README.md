# metro-path-mongodb

> Dev.to page - https://dev.to/iabdsam/metro-rail-path-finder-2o3k
> 
> Hosted at - https://metroroute.herokuapp.com/


This is a Metro Rail Path Finder app I made for Dev.to + MongoDb Atlas Hackathon. It sources its data from Mongodb Atlas Database.

Technology Used: Expressjs, MongoDb Atlas

## GP
Entire path calculation is done in an indepndent MongoDb script **(/routes/mongo.js)** which just requires that the database be according to a simple template **(/schema.txt)**.

## To run the app
Just make sure that node and npm are installed and 
```
npm start
```
And it will be deployed on `http://localhost:3000/users/details`.

**The calculation may get slow for longer paths.**

### Homepage
![image](https://user-images.githubusercontent.com/62374784/160750290-7b6671c9-44a1-44d8-af13-c3ecac3d46fd.png)

