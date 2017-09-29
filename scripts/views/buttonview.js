 class ButtonView { //this shows the button 
 		constructor(model){
	 			this.model = model; //model has the data from above//don't really understand this. 
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


 			}
 			window.render(); //calling the render function
 		})
 		return $el
 		
 	}

 }
