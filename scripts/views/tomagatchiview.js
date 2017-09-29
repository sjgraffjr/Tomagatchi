 class TomagotchiView {
	 		constructor(model){
	 			this.model = model; //model has the data from above//don't really understand this. 
	 		}
	 		render(){  //this method controls what's on the page. When you call render it combines the model data with HTML
	 			 
	 			 if(this.model.dead){
	 			 	return `<h1>${this.model.name} is dead</h1> 
	 			 	        <iframe src="https://giphy.com/embed/26FmPRyuABbuJmIb6" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
	 			 	        `//this says tomagatchi's name is  is dead

	 			 }else{
	 			 	//wrapped the html in a JQuery element 
	 			 	//this how this part of the page looks
	 			 	const $el = $( `<div class="row">
	 			 		<div class="col-md-8">
		 			 		<h1>${this.model.name}</h1>
		 			 		<img  src="${this.model.image()}" width="400px" height="400px"/>         
		 			 		<input value="${this.model.name}"/> 
	 			 		</div>
		 			 	<div class="col-md-4">
		 			 		<div>Hunger Level: ${this.model.hunger} </div>
		 			 		<div>Sleepiness Level: ${this.model.sleepiness}</div> 
		 			 		<div>Boredom Level: ${this.model.boredom}</div>
		 			 		<div>Age: ${this.model.age}</div> 
		 			 	</div>
	 			 		</div>`)
	 			 	// this is where you listen for events from the user
	 			 	// this is stuff what the user can do with this part of the page
	 			 	$el.find('input').on('change',(e)=> { //
	 			 			//e is an event object you need it to make the function work
	 			 				this.model.name  = e.target.value
	 			 				window.render()
	 			 		})
	 			 	return $el
	 			 }	//

	 		}

 }