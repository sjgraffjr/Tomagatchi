// setting up the data in the model
const squirtle = new Tomagotchi('squirtle',1,1,1,1); //instance of tomagatchi class

// integrating the model with views that can build parts of the page
const squirtleView = new TomagotchiView(squirtle); //passing the model in the views so the view has access to it
const buttonView = new ButtonView(squirtle);

// provide a way to re-draw the page whenever the data changes
window.render = () => { 
	$('#app').html([squirtleView.render(), buttonView.render()])
}
// bootstrapping the application
window.render(); //the div #app would be empty without.

// stuff that happens to the tomagotchi over time
Timer.start(squirtle)

