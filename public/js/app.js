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
			this.model.on('change',this.render,this);
		},
		template: _.template(goalTemplate),
		render: function(){
			var attr = this.model.toJSON();
			this.$el.html(this.template(attr));
			return this;	
		},
		events:{

		}
	});

	var GoalsView = Backbone.View.extend({
		el: '.goals',
		initialize:function(){

		},
		render:function(){

		},
		addOne:function(){
			var goalView = new GoalView({model:new Goal()});
			this.$el.find('tbody').append(goalView.render().el);			
		},
		events:{
			"click .addBtn":"addOne"
		}
	});

	var goalsView = new GoalsView({collection:goals});
});
