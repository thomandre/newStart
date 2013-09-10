App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('register');
});

App.IndexController = Ember.ObjectController.extend({
	hasNotRegistered: true,
	register: function() {
		var me = this;

	    $.ajax({
	    	type: "POST",
	    	dataType: 'json',
		  	url: "register_beta",
			data: { email: $("#email").val()},
			success: function (msg) {
				if(msg.status  == 'ok') {
					me.set('hasNotRegistered', false);
				}
				console.log(msg.status);
			}
		});
	}
});