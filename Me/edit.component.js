"use strict"

const edit = {
	
	template: `
	<form class="page editPage" ng-submit = "$ctrl.submit()">
	<h1 class = "blue">Use the form below to update your profile</h1>
	
	<h3>Name</h3>
		<input value = "{{$ctrl.content.title}}" class="editChild" ng-model = "$ctrl.content.title" type = "textbox" placeholder = "title">
	<h3>Contact</h3>
		<input value = "{{$ctrl.content.email}}" class="editChild" ng-model = "$ctrl.content.email" type = "textbox" placeholder = "email">
	<h3>Bio</h3>
		<textarea class="editChild editText" ng-model = "$ctrl.content.text" placeholder = "Your bio here" value = "{{$ctrl.content.text}}"></textarea>
		<button class="editChild editButton editButt" ng-click = "$ctrl.submit()">Update</button>
		<h3>Select an avatar:</h3>
		<a href = "" ng-click="$ctrl.background(0)">Gun powder plot</a>
		<a href = "" ng-click="$ctrl.background(1)">Pickachu</a>
		<a href = "" ng-click="$ctrl.background(2)">Owl</a>
		<a href = "" ng-click="$ctrl.background(3)">Sam</a>
		<a href = "" ng-click="$ctrl.background(4)">Pug</a>
		<a href = "" ng-click="$ctrl.background(5)">Baseball cap</a>
	</form>
	`,
	
	controller:["Serv", function(Serv){
		
		this.$onInit = function(){
			this.content = Serv.get();
		}
		
		this.submit = function(){
			Serv.set(this.content);
		}
		
		this.background = function(num){
			Serv.setImg("images/image"+num+".jpg");
		}
		
	}]
	
}	

angular.module("ProfileApp").component("edit", edit);