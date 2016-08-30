// To do: 1) Make darken button 2) make darken work

var gridCount = 16;
var gridCountSq = gridCount * gridCount;
var boxSize = 960 / gridCount;
$(document).ready(function(){
	// Set sketchpad functions
	function makeGrid() {
		for(i = 1; i <= gridCountSq; i++) {
			$('.container').append("<div class='square'></div>");
		};
		$('.square').css({'width':boxSize, 'height':boxSize});
	};
	function clearGrid() {
		for(i = 1; i <= gridCountSq; i++) {
			$('.square').remove()
		};
	};
	function turnToBlack() {
		$('.square').mouseenter(function() {
			$(this).addClass("black");
		});
	};
	function randomColor(){
 		r = Math.floor(Math.random() * (256));
 		g = Math.floor(Math.random() * (256));
 		b = Math.floor(Math.random() * (256));
 	};
 	function colorize() {
 		$('.square').mouseenter(function() {
			randomColor();
			$(this).css('background-color','rgb('+r+','+g+','+b+')');
		});
	};
	function darken(){
		$('.square').css({'background-color':'#000','opacity':'0'})
		$('.square').mouseenter(function() {
			$(this).css('opacity','+=.1');
		});
	};
	// Set original grid
	makeGrid();
	turnToBlack();
	// Set Button Functions
	function makeNewGrid() {
		clearGrid();
		gridCount = prompt("What size would you like?");
		gridCountSq = gridCount * gridCount;
		boxSize = 960 / gridCount;
		makeGrid();
	};
	$('.reset').click(function(){
		makeNewGrid();
		turnToBlack();
	});
	$('.colorize').click(function(){
		makeNewGrid();
		colorize();
	});
	$('.darken').click(function(){
		makeNewGrid();
		darken();
	});
	
});