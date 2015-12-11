# Create db folders
mkdir /data/s1
mkdir /data/s2
mkdir /data/config_server

# Start the config server
mongod --configsvr --dbpath /data/config_server --port 26050

# Restore the config server
mongorestore --host localhost --port 26050 gene_backup/config_server

# Connect to config server
mongo localhost:27019/config
