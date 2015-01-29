Template.body.helpers({
	count: function () {
		return DemoCollection.find().count();
	}
});
