 class ButtonView { //this shows the button 
 		constructor(model){
	 			this.model = model; //model is the tomagatchi instance
	 		}
 	render(){
 		const $el = $( 
 				`<div> 
	 				<button>feed</button>
	 				<button>lights</button>
	 				<button>play</button>
	 			</div>`
 				)


 		$el.find('button').on('click',(e)=>{
 			if(e.currentTarget.textContent === 'feed'){ // listen for click events on feed button
 				this.model.hunger -= 1
 			}else if(e.currentTarget.textContent === 'play'){ // listen for click on play button
 				this.model.boredom -= 1

 			}else if(e.currentTarget.textContent === 'lights'){ // listen for click on play button
 				$('#app').toggleClass('dark') //toggleClass turns button and off
 				//in the js file I created if else statement. if lights have a class of dark then sleepiness
 				//goes down by one, Else the sleepiness level goes up


 			}
 			window.render(); //calling the render function
 		})
 		return $el
 		
 	}

 }
