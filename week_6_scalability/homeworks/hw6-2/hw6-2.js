// enable sharding for the week6 db
sh.enableSharding("week6")

// create the index
db.trades.createIndex( { ticker : 1, time : 1 } )

// shard the collection specifying the shard key
sh.shardCollection("week6.trades", {ticker: 1, time: 1})

// check the shard
use config
db.chunks.find().pretty()
// or
db.chunks.find({}, {min: 1, max: 1, shard: 1, _id: 0, ns: 1})
