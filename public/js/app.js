$(document).ready(function(){
	console.log('app loaded');

	var Goal = Backbone.Model.extend({
		defaults:{
			date: new Date(),
			text: 'Read a book!'
		}
	});

	var Goals = Backbone.Collection.extend({
		model:Goal,
		url:'/goals'
	});

	var goals = new Goals;

	var GoalView = Backbone.View.extend({
		tagName: 'tr',
		initialize: function(){

		},
		template: '',
		render: function(){
		
		},
		events:{

		}
	});

	var GoalsView = Backbone.View.extend({
		el: '',
		initialize:function(){

		},
		render:function(){

		},
		addOne:function(){

		},
		events:{
		}
	});
});
