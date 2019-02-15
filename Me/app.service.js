"use strict"

const Serv = function($location){
	
	this.set = function(content){
		
		this.content = content;
		$location.path("/page");
		
		console.log("Setting");
		
	}
	this.get = function(){
		
		console.log("Getting");
		return this.content;
		
	}
	
	this.setImg = function(img){
		
		this.img = img;
		
	}
	
	this.getImg = function(){
		
		return this.img;
		
	}
	
}

angular.module("ProfileApp").service("Serv", Serv);