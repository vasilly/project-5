// No jQuery!

"use strict";

function remCalibrate() {
	// var size = Math.max(16,window.innerWidth/100);
	// document.documentElement.style.fontSize = size + 'px';
	// console.log('calibrate '+size)
	// var root = document.querySelector(":root");

	document.getElementById('msg1').innerHTML= window.innerWidth;
	document.getElementById('msg2').innerHTML= window.innerHeight;
}
remCalibrate();
window.addEventListener('resize', remCalibrate, false);

var rootFontSize=1
function changeFontSize() {
	// var size = Math.max(16,window.innerWidth/100);
	// document.documentElement.style.fontSize = size + 'px';
	// console.log('calibrate '+size)
	// var root = document.querySelector(":root");

}


document.getElementById("text-sizer").addEventListener("click", function( event ) {
    // display the current click count inside the clicked div
		 rootFontSize++ ;
		if (rootFontSize>3) rootFontSize=1
		document.getElementById('msg1').innerHTML= ("font: "+rootFontSize);
		document.body.style.fontSize = (rootFontSize+"rem");
  }, false);
// clip to a decent range size to avoid, making endless size adjustments as screens being bigger and bigger
	// var aspect_ratio =  (window.innerHeight/window.innerWidth)/0.75
	// var vwh =  window.innerWidth/100
	// var rem = Math.max(8,Math.min(24,vwh*aspect_ratio))
	//
	// document.documentElement.style.fontSize =  rem + 'px';
	//
	//

	// SUN to WED, 10:00 - 22:30
	// THUR 10:00 - 23:00
	// FRI to SAT, 10:00 - 23:30


// Controller
var images = angular.module("images", ["angular.filter"]);

images.controller("imagesController", function($scope){
	$scope.list = [
		{
			"Title"		: "Stir Fry",
			"Name"		: "Fried Fresh",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food1.jpeg"
		},
		{
			"Title"		: "Lean Beef",
			"Name"		: "+Healthy Salad",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food2.jpeg"
		},
		{
			"Title"		: "Gordon",
			"Name"		: "Gordon, Australia",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food3.jpeg"
		},
		{
			"Title"		: "Sashimi",
			"Name"		: "Salmon or Tuna",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food4.jpeg"
		},
		{
			"Title"		: "Garden Salad",
			"Name"		: "Healthy",
			"Type"	 	: "Vegetarian",
			"Mode"	 	: "Dinner",
			"Image" 	: "food5.jpeg"
		},
		{
			"Title"		: "Zucchini",
			"Name"		: "Succulent",
			"Type"	 	: "Vegetarian",
			"Mode"	 	: "Lunch",
			"Image" 	: "food6.jpeg"
		},
		{
			"Title"		: "Buns",
			"Name"		: "Baked Fresh",
			"Type"	 	: "Vegetarian",
			"Mode"	 	: "Lunch",
			"Image" 	: "food7.jpeg"
		},
		{
			"Title"		: "Sushi",
			"Name"		: "Fresh daily",
			"Type"	 	: "Meat",
			"Mode"	 	: "Lunch",
			"Image" 	: "food8.jpeg"
		},
		{
			"Title"		: "Burger",
			"Name"		: "Wholesome goodness",
			"Type"	 	: "Meat",
			"Mode"	 	: "Dinner",
			"Image" 	: "food9.jpeg"
		},
		{
			"Title"		: "Bread",
			"Name"		: "Baked Fresh",
			"Type"	 	: "Meat",
			"Mode"	 	: "Lunch",
			"Image" 	: "food10.jpeg"
		}
	];
});


// Add/remove classes used in animation
function filtered(){
	"use strict";
	var grid = document.getElementById("images_grid");
	grid.className = "filter_down"; // Add class that animates out items
	setTimeout(function(){
		grid.className = ""; // Remove class to animate items back in
	},550);
}
