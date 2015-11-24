// add new mongod
mongod --shardsvr --dbpath data/shard2 --port 27020

// add new shard in mongo shell connected to original mongos
sh.addShard("buchs:27020")

// confirmation
homework.check1()

// checks
use config
db.chunks.find( { ns:"week6.trades" }, {min:1,max:1,shard:1,_id:0} ).sort({min:1})
// or
db.chunks.aggregate( [
 { $match : { ns : "week6.trades" } } ,
 { $group : { _id : "$shard", n : { $sum : 1 } } }
] )

// run homework
homework.c()
