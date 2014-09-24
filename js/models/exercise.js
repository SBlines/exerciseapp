var Exercise = Backbone.Model.extend({

	initialize: function(){
		console.log("Exercise created");
	},

	defaults: {
		name: '',
		sets: '',
		reps: '',
		work: ''
	}

	url: '#'

});