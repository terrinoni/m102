// Update the names of the shards
db.shards.update({ "_id" : "s1" }, { "_id" : "s1", "host" : "localhost:27501" })
db.shards.update({ "_id" : "s2" }, { "_id" : "s2", "host" : "localhost:27601" })
