// Retrieve the list of current operations
db.currentOp();

// Retrieve the opid of the operation started by homework.b()
// If homework.b() is the only operation, the opid can be retrieved as follow:
// opid = db.currentOp().inprog[0].opid;

// Kill the selected operation
db.killOp(opid);
