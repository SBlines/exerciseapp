var Exercise = Backbone.Model.extend({

	initialize: function(){
		console.log("Exercise created");
	},

	defaults: {
		name: '',
		sets: 1,
		reps: 1,
		weight: 0,
		work: 0
	},

	url: '#'

});