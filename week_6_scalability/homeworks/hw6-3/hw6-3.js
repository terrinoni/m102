// add new mongod
mongod --shardsvr --dbpath data/shard2 --port 27020

// add new shard in mongo shell connected to original mongos
sh.addShard("buchs:27020")

// confirmation
homework.check1()

//

// run homework
homework.c()
