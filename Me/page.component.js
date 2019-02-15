"use strict"

const page = {
	
	template: `
		
		<div class="page">
		
			<img src = "{{$ctrl.img}}">
			
			<div class="pageHalf">
			
				<h1 class="title">{{$ctrl.content.title}}</h1>
				<p  class="email">{{$ctrl.content.email}}</p>
				<textarea readonly rows = "3" col = "4" class="text">{{$ctrl.content.text}}</textarea>
				
				<button class = "editButton" ng-click="$ctrl.redirect()">Edit</button>
			
			</div>
		
		</div>
	
	`,
	
	controller:["$location", "Serv", function($location, Serv){
		
		this.$onInit = function(){
			
			this.content = Serv.get() || {title: "Your name", email: "email@email.com", text: "Bio"};
			
			this.img = Serv.getImg() || "photo.jpg";
			
		}
		
		this.redirect = function(){
			
			$location.path("/edit");
			
		}
		
	}]
	
}

angular.module("ProfileApp").component("page", page);

			/* <h1>Grand Chirp</h1>
				<p>email@email.com</p>
				<p>Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem</p> */





