var ExercisesView = Backbone.View.extend({
	el: '#ex-input',

	
template: _.template($('#exerciseListTemplate').html()),

  initialize: function() {
    console.log('View initialized');
    this.listenTo(this.collection, 'add', this.render, this);
    this.collection.on('change', this.render, this);
    this.listenTo(this.collection, 'destroy', this.render, this);
    this.render();
  },

  render: function(){
    this.$el.html( this.template({collection: this.collection}) );
    var self = this;
    this.collection.forEach(function(exercise) {
      var exerciseView = new ExerciseView({model: exercise});
      self.$el.find('tbody').append(exerciseView.render().el);
    })
  
    return this;

    },

  events: {
    'click #create-ex': 'addToList',
  },
    

  addToList: function(){
    console.log("Adding to list..");
    if(this.verify()){
      var nameInput = document.getElementById("new-ex").value;
      var weightInput = parseInt(document.getElementById("new-weight").value) || 0;

      //this.collection.create({name: nameInput, weight: weightInput});
      //try to save:

      var ex = new Exercise({name: nameInput, weight: weightInput});
      ex.save();
      this.collection.add(ex);
      document.getElementById("new-ex").value = '';
      document.getElementById("new-weight").value = '';
    }
    else { 
      alert('Please give your exercise a name.');
    }
  },

  verify: function(){
    //verify can be done in Model when saving
    //won't need to verify toppings once checkboxes are created. set default to chesse topping if no other boxes
    //if($('#new-name').val().length > 0 && $('#new-topping').val().length > 0){
    //if($('#new-ex').val().length > 0){
    if(document.getElementById("new-ex").value.length > 0){
      return true;
    }
    else {
      return false;
    }
  }

});

var exercisesView = new ExercisesView({collection: exercises});

