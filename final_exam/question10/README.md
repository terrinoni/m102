# FINAL: QUESTION 10
Now, for our temporary data mart, once again from a mongo shell connected to the cluster:

1. create an index {N2:1,mutant:1} for the snps.elegans collection.
2. now run:
```
db.elegans.find({N2:"T",mutant:"A"}).limit(5).explain("executionStats")
```

Based on the explain output, which of the following statements below are true?

- [x] 2 shards are queried.
- [ ] 7 documents are examined.
- [x] 8 documents are examined.
- [ ] 1 shard is queried.
- [ ] Thousands of documents are examined.
- [ ] No shards are queried.
- [ ] 5 documents are examined.
