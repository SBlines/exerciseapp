var ExerciseView = Backbone.View.extend({
	className: 'exercise-row',
	tagName: 'tr',

	template: _.template($('#exerciseViewTemplate').html()),

  events: {
    'click .name': 'clickName',
    'click .sets': 'addOne',
    'click .reps': 'addOne',
    'click .weight': 'addOne',
    'click .delBut': 'remove'
  },

  render: function(){
    this.$el.html( this.template({exercise: this.model}) );
    return this;
  },

  clickName: function(){
    var name = this.model.get('name');
    search(name);
  },
  
  remove: function(event) {
    this.model.destroy();
  },

  addOne: function() {
    var modelKey = arguments[0].currentTarget.className.toString();
    var modelVal = parseInt(this.model.get(modelKey));
    modelVal++;
    this.model.set(modelKey, modelVal);

}

  // These have been DRYed
  // setsUp: function(){
  //   var newVal = {sets: ''};
  //   newVal.sets = parseInt(this.model.get('sets'));
  //   newVal.sets++;
  //   this.model.set(newVal);
  // },

  // repsUp: function(){
  //   var newVal = {reps: ''};
  //   newVal.reps = parseInt(this.model.get('reps'));
  //   newVal.reps++;
  //   this.model.set(newVal);
  // },

  // weightUp: function(){
  //   var newVal = {weight: ''};
  //   newVal.weight = parseInt(this.model.get('weight'));
  //   newVal.weight++;
  //   this.model.set(newVal);
  // },

});


