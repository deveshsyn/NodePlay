window.LoginView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    var template = _.template($("#login_template").html(), {});
    $(this.el).html(template);
  },

  events: {
    "click input[type=button]": "doLogin"
  },

  doLogin: function(event) {
    // Button clicked, you can access the element that was clicked with event.currentTarget
    alert("Logging " + $("#userName").val());
  }
});

var login_view = new LoginView({el: $('#loginContainer')});
