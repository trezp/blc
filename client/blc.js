if (Meteor.isClient) {
  
}


if (Meteor.isServer) {
  
}


Router.route('/', function () {
  this.render('Home');
});

 Router.route('/about.html', function () {
  this.render('About');
});