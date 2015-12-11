# Start the config server
mongod --configsvr --dbpath /data/config_server --port 26050

# Do the update from question9.js then restart the config server
Ctrl^C
mongod --configsvr --dbpath /data/config_server --port 26050

# Start the two shards
mongod --shardsvr --dbpath /data/s1 --port 27501 --smallfiles --oplogSize 50
mongod --shardsvr --dbpath /data/s2 --port 27601 --smallfiles --oplogSize 50

# Restore data for each shard
mongorestore --host localhost --port 27501 gene_backup/s1
mongorestore --host localhost --port 27601 gene_backup/s2

# Start the mongos
mongos --configdb localhost:26050

# Connect to mongos
mongo
