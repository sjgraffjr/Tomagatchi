console.log("Fart Bucket");
// Tomagotchi

// Description

// Let's use our front-end web development skills to create a "living" pet! We'll use HTML, CSS, and Javascript to interact with our pet.
// Requirements

// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// 	1.Create a class for you tomagotchi

//views build html and models store data
 	const squirtle = new Tomagotchi('squirtle',1,1,1,1); //setting up the data in the model
 	const squirtleView = new TomagotchiView(squirtle); //setting up a view to build the Html
 	const buttonView = new ButtonView(squirtle) //setting up a another view to build html 
 	window.render = () => { //the render functions builds the html and put its on the page
 		$('#app').html([squirtleView.render(), buttonView.render()])//finding target and putting html from the views
 }
 	window.render(); //setup the page initially 
 	Timer.start(squirtle)
 	//timer rules
	




// 	2.Display a character of your choice on the screen to represent your pet
// 	3.Display the following metrics for your pet. Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age

// 	4.Add buttons to the screen to feed your pet, turn off the lights, and play with your pet
// 	5.Add the ability to name your pet
// 	6.Style the page
// 	7.Increase your pet's age every x minutes
// 	8.Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// 	9.You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// 	10.Morph your pet at certain ages
// 	11.Animate your pet across the screen








