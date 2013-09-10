App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('register');
});

App.IndexController = Ember.ObjectController.extend({
	hasNotRegistered: true,
	message: '',
	register: function() {
		var me = this;

	    $.ajax({
	    	type: "POST",
	    	dataType: 'json',
		  	url: "register_beta",
			data: { email: $("#email").val()},
			success: function (msg) {
				if(msg.status  == 'ok') {
					me.set('message', 'We\'ll keep you informed about the rocket launch.');
				} else {
					me.set('message', msg.message);
				}
			}
		});
	}
});

App.IndexView = Em.View.extend({
  	keyDown: function(e) {
		if(e.keyCode == 13) {
			this.get('controller').send('register');
		}
    },
});