// start the mongod instance
mongod --dbpath data/shard

// connect to the mongod instance
mongo --shell localhost/week6 week6.js

// initiaze the db
homework.init()

// check che status
db.trades.stats()

// stop the mongod process
// restart the mongod process with new option
mongod --shardsvr --dbpath data/shard

// start a mongo config server
mongod --configsvr

// start mongos
mongos --configdb buchs:27019

// connect mongo shell to mongos
mongo --shell localhost/week6 week6.js

// add first shard
sh.addShard("buchs:27018")

// veryfy correct sharding
db.trades.find().pretty()
db.trades.count()
db.trades.stats()

// run homework
homework.a()
