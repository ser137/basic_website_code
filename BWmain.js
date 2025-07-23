// 'main.js'

var slider_img = document.querySelector('.slider-img');
var images = ['BW1.jpg', 'BW2.jpg', 'BW3.jpg', 'BW4.jpg', 'BW5.jpg', 'BW6.jpg', 'BW7.jpg', 'BW8.jpg', 'BW9.jpg', 'BW10.jpg', 'BW11.jpg', 'BW12.jpg', 'BW13.jpg', 'BW14.jpg', 'BW15.jpg', 'BW16.jpeg', 'BW17.jpg'];
var i = 0; // current image index

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}