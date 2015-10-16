# HOMEWORK: HOMEWORK 1.4
How would you print out, in the shell, just the the value in the "name" field, for all the product documents in the collection, without extraneous characters or braces, sorted alphabetically, ascending? (Check all that would apply.)

- [x] `var c = db.products.find( { }, { name : 1, _id : 0 } ).sort( { name : 1 } ); while( c.hasNext() ) { print( c.next().name); }`
- [x] `var c = db.products.find( { } ).sort( { name : 1 } ); c.forEach( function( doc ) { print( doc.name ) } );`
- [ ] `db.products.find( { }, { name : 1, _id : 0 } ).sort( { name : 1 } )`
- [ ] `var c = db.products.find( { } ).sort( { name : -1 } ); while( c.hasNext() ) { print( c.next().name); }`

*Notes: all the first 3 queries return the names from the collection in a sorted way (`{name:1}`), but only the first 2 return no "extraneous characters or braces", since a `print` method is called directly on the name.*
