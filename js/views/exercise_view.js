var ExerciseView = Backbone.View.extend({
	className: 'exercise-row',
	tagName: 'tr',

	template: _.template($('#exerciseViewTemplate').html()),

  events: {
    'click .sets': 'setsUp',
    'click .reps': 'repsUp',
    'click .weight': 'weightUp',
    'click .delBut': 'deleteOrder'
  },
  
  deleteOrder: function(event) {
    //var deleteModel = this.collection.get($(event.target).data("id"));
    this.model.destroy();
  },

  render: function() {
    this.$el.html( this.template({exercise: this.model}) );
    return this;
  },

  setsUp: function(){
    var newVal = {sets: ''};
    newVal.sets = parseInt(this.model.get('sets'));
    newVal.sets++;
    this.model.set(newVal);
  },

  repsUp: function(){
    var newVal = {reps: ''};
    newVal.reps = parseInt(this.model.get('reps'));
    newVal.reps++;
    this.model.set(newVal);
  },

  weightUp: function(){
    var newVal = {weight: ''};
    newVal.weight = parseInt(this.model.get('weight'));
    newVal.weight++;
    this.model.set(newVal);
  },

  togCook: function(){
    //console.log("cookBox clicked");
    if(this.$('.cookBox').is(':checked')){
    	this.model.set({status:'cooked'});
    }//checked sets to cooked
		else {
    	this.model.set({status:'pending'});
    } // unchecked sets to pending
  },

	togDeliver: function(){
    //console.log("deliverBox clicked");
    if(this.$('.cookBox').is(':checked') && this.$('.deliverBox').is(':checked')){
    		this.model.set({status:'delivered'});
    }//both checked sets to delivered
		else if (this.$('.cookBox').is(':checked')){
		  this.model.set({status:'cooked'});
		}
		else {
			alert("Cannot deliver without cooking!");
			this.$('.deliverBox').prop('checked', false);
		}
    		
  }
});


