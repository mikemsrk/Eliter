$(document).ready(function(){
	console.log('app loaded');

	var goalTemplate = '<td><%-text%></td>'
			+ '<td><%-date%></td>';

	var Goal = Backbone.Model.extend({
		defaults:{
			date: new Date(),
			text: 'Read a book!'
		}
	});

	var Goals = Backbone.Collection.extend({
		model:Goal
		//url:'/goals'
	});

	var goals = new Goals;

	var GoalView = Backbone.View.extend({
		tagName: 'tr',
		initialize: function(){
			//when attached model changes, re-render it
			this.model.on('change',this.render,this);
		},
		template: _.template(goalTemplate),
		render: function(){
			//turn attached  model into JSON
			//set this view's html to template w/  model data
			var attr = this.model.toJSON();
			this.$el.html(this.template(attr));
			//return this view to be able to use its data in other views
			return this;	
		},
		events:{
			//deleting goal item
			//editing goal item
		}
	});

	var GoalsView = Backbone.View.extend({
		el: '.goals',
		initialize:function(){
			//on this.collection - add, run addOne function
			//on this.collection - remove, run remove function
		},
		render:function(){
			//clear out all items in the table
			//for each item in this.collection, run addOne function
		},
		addOne:function(e){
			//create a new GoalView item with {model:goal (passed parameter)}
			//add the view item into the table
			console.log(e.currentTarget.text);

			//var goalView = new GoalView({model:goal});
			//this.$el.find('tbody').append(goalView.render().el);			
		},
		events:{
			"click .addBtn":"addOne"
		}
	});

	var goalsView = new GoalsView({collection:goals});
});
