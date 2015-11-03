// Build an index on the "active" and "tstamp" fields
db.sensor_readings.createIndex({active: 1, tstamp: 1});
