//create an array of images to loop through
//variable to hold the index position

//functions:
//function to change imaged based on index
//function to skip
//function to go back

//length of the array? stop next button at end of images

// src attr change it based on the array element of position 0, 1

var images =[
	"images/food2.jpg", 
	"images/food3.jpg", 
	"images/food4.jpg",
	"images/food5.jpg"
];

var index = 0;

function nextImage() {
	var nextImage = images[index + 1];
	$("#image-to-vote-on").attr("src", nextImage);

	if (index == (images.length - 1)) {
		console.log("You're at the end.");
	} else {
		index++;
	}
}

function previousImage() {
	var previousImage = images[index - 1];
	$("#image-to-vote-on").attr("src", previousImage);

	if (index <= 0) {
		console.log("You're at the beginning.");
	} else {
		index--;
	}
}


$(function() {
	$("input[value='Skip']").on("click", nextImage);
	$("input[value='Back']").on("click", previousImage);
});




//navigate back to the previous image

//navigate back to image
