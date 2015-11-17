// start mongod processes
mongod --port 27001 --replSet hw5 --dbpath 1 --oplogSize 50 --smallfiles
mongod --port 27002 --replSet hw5 --dbpath 2 --oplogSize 50 --smallfiles
mongod --port 27003 --replSet hw5 --dbpath 3 --oplogSize 50 --smallfiles

// connect with a client
mongo --port 27001

// in mongo client: create a config object
cfg = {
    "_id" : "hw5",
    "members" : [
        {"_id" : 0, "host" : "buchs:27001"},
        {"_id" : 1, "host" : "buchs:27002"},
        {"_id" : 2, "host" : "buchs:27003", "arbiterOnly" : true}
    ]
}

// in mongo client: initiate the replica set
rs.initiate(cfg)

// retrieve the value for the homework
rs.status().members[2].state
