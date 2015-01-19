Router.configure({
	layoutTemplate:'layout'
});

Router.route('/', function(){
	this.render('home');
}); 

Router.route('/about', function(){
	this.render('about');
}); 

Router.route('/calendar', function(){
	this.render('calendar');
}); 

Router.route('/tutoring', function(){
	this.render('tutoring');
}); 

Router.route('/volunteer', function(){
	this.render('volunteer');
}); 

Router.route('/contact', function(){
	this.render('contact');
}); 
	