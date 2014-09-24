var Exercise = Backbone.Model.extend({

	initialize: function(){
		console.log("Exercise created");
	},

	defaults: {
		name: '',
		sets: 0,
		reps: 0,
		weight: 0,
		work: 0
	},

	url: '#'

});