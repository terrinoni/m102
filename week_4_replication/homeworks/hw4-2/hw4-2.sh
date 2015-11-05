# start mongod as replica set
mongod --dbpath 1 --port 27001 --replSet "homework42" --smallfiles --oplogSize 50
