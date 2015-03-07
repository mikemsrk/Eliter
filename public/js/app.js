$(document).ready(function(){
	console.log('app loaded');

	//function used to turn form data into JSON
	$.fn.serializeObject = function()
	{
		var o = {};
		var a = this.serializeArray();
		$.each(a,function(){
			if (o[this.name] !== undefined) {
			    if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			    }
			    o[this.name].push(this.value || '');
			} else {
			    o[this.name] = this.value || '';
			}
	   	 });
	    	return o;	
	};

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
			this.collection.on('add',this.addOne,this);
			//on this.collection - remove, run remove function
		},
		render:function(){
			//clear out all items in the table
			//for each item in this.collection, run addOne function
		},
		addOne:function(goal){
			//renders 1 item to the list
			//create a new goalview with passed goal param
			var goalView = new GoalView({model:goal});
			//builds html with goalview render, and add it to the page
			this.$el.find('tbody').append(goalView.render().el);		
		},
		addNew:function(e){
			e.preventDefault();
			// create a new goal based on form data
			var goal = new Goal(this.$('#new-goal').serializeObject());
			//add the new goal to goals collection - triggers addOne function
			goals.add(goal);
		},
		events:{
			"click .addBtn":"addNew"
		}
	});

	var goalsView = new GoalsView({collection:goals});
});
