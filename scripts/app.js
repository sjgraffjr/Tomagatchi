console.log("Fart Bucket");
// Tomagotchi

// Description

// Let's use our front-end web development skills to create a "living" pet! We'll use HTML, CSS, and Javascript to interact with our pet.
// Requirements

// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// 	1.Create a class for you tomagotchi
 class Tomagotchi {
 		constructor(name,hunger,sleepiness,boredom,age){
 			this.name = name;
 			this.hunger = hunger;
 			this.sleepiness = sleepiness;
 			this.boredom = boredom;
 			this.age = age;
 		}
 		death(){

 		}
 	}
 class TomagotchiView {
	 		constructor(model){
	 			this.model = model;
	 		}
	 		render(){  
	 			 return `<h1>${this.model.name}</h1> 
	 			 		<div>Hunger Level: ${this.model.hunger}</div>
	 			 		<div>Sleepiness Level: ${this.model.sleepiness}</div> 
	 			 		<div>Boredom Level: ${this.model.boredom}</div>
	 			 		<div>Age: ${this.model.age}</div>`

	 		}

 }

 class ButtonView {
 	render(){
 		return `<button>feed</button>
 				<button>lights</button>
 				<button>play</button>`


 	}
 }

 	const squirtle = new Tomagotchi('squirtle',2,4,5,1);
 	const squirtleView = new TomagotchiView(squirtle);
 	const buttonView = new ButtonView()
 	$('#app').html([squirtleView.render(), buttonView.render()])


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








