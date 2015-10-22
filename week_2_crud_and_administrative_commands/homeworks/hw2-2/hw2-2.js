// Retrieve the specified object
var obj = db.products.findOne({_id: ObjectId("507d95d5719dbef170f15c00")});
// Update the "term_years" field
obj.term_years=3;
// Update the object
db.products.update({_id: ObjectId("507d95d5719dbef170f15c00")}, obj);
// Update the "limit.sms.over_rate" field
obj.limits.sms.over_rate=0.01;
// Update the object
db.products.update({_id: ObjectId("507d95d5719dbef170f15c00")}, obj);
// Execute the script
homework.b();
