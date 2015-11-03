// Create an index on the products collection fot the field "for"
db.products.createIndex({for: 1})

// Do a find() for products that work with an "ac3" phone and count
db.products.find({"for" : "ac3"}).count()
// Do a find() and explain
db.products.find({"for" : "ac3"}).explain("executionStats")
