var AMOUNT = 10000;

Meteor.startup(function() {
	if (DemoCollection.findOne())
		return;

	var current = AMOUNT;

	while (current--)
		DemoCollection.insert(LOAD);
});
