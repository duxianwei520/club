(function(){

var index = $(".on").index() + 1;

var now = { row:index, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

s = window.innerHeight/500;
ss = 250 * (1 - s);



document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

var len = $(".page").length;

$(document).swipeUp(function(){

	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != len) { 
		now.row = last.row + 1; now.col = 1; pageMove(towards.up);
	}	

})

$(document).swipeDown(function(){

	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 1) { 
		now.row = last.row - 1; now.col = 1; pageMove(towards.down);
	}	

})

/*$(document).swipeLeft(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>1 && last.row<5 && last.col==1) { 
		now.row = last.row; now.col = 2; pageMove(towards.left);
	}	
})

$(document).swipeRight(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row > 1 && last.row < 5 && last.col == 2) { 
		now.row = last.row; now.col = 1; pageMove(towards.right);
	}	
})*/

function pageMove(tw){
	var lastPage = ".page-" + last.row + "-" + last.col,
		nowPage = ".page-" + now.row + "-" + now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('on');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('on');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
}

	/*audio 控制*/
	$(".player-button").on('click', function(){

		var audio = document.getElementById('audio');  
		if($(this).hasClass("player-button-stop")){
			$(this).removeClass("player-button-stop");
			audio.play();
		} else {
			$(this).addClass("player-button-stop");
			audio.pause();
		}

	});


})();