var body=document.querySelector("body");
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var corrcetColor="";
var colorDisplay=document.querySelector("#rgbDisplay");
var button=document.querySelectorAll("button");
var win=false;
var message=document.querySelector("#message");
message.textContent="";

//游戏的默认模式为hard模式
button[2].classList.add("modeSelected");
//给六个square六个随机颜色
for (var i=0; i<squares.length; i++){
	squares[i].style.background=random_bg_color();
}
//随机从六个square里pick a color 作为正确颜色
corrcetColor=squares[pick(6)].style.background;
console.log(corrcetColor);
//在h1里显示这个颜色
colorDisplay.textContent=corrcetColor;
//现在可以点方块，看看哪个是正确的方块啦
checkAnswer(squares);
//----------------------------------------------------------------------
//如果现在想要easy模式的话，可以点击easy button：
button[1].addEventListener("click",function(){
	//首先，把win变成false，表示可以重新开始了；
	win=false;
	h1.style.background="steelblue";
	message.textContent="";
	this.classList.add("modeSelected");
	//hard模式去掉
	button[2].classList.remove("modeSelected");
	//现在要把下面一排的三个方块去掉，留上面三个方块
	for(var i=0; i<3; i++){
		squares[i+3].classList.remove("square");
	}
	//给三个方块三个随机颜色
	for (var i=0; i<squares.length-3; i++){
		squares[i].style.background=random_bg_color();
		console.log(squares[i].style.background);
	}
	//随机从三个square里pick a color 作为正确颜色
	corrcetColor=squares[pick(3)].style.background;
	console.log(corrcetColor);
	//在h1里显示这个颜色
	colorDisplay.textContent=corrcetColor;
	//现在可以点方块，看看哪个是正确的方块啦
	checkAnswer(squares);
})
//----------------------------------------------------------------------
//现在要切换到hard模式的话，可以点击hard button：
button[2].addEventListener("click",function(){
	//首先，把win变成false，表示又可以重新开始了；
	win=false;
	h1.style.background="steelblue";
	message.textContent="";
	this.classList.add("modeSelected");
	//easy模式去掉button的背景颜色
	button[1].classList.remove("modeSelected");
	//现在要把下面一排的三个方块加上，变成六个方块
	for(var i=0; i<3; i++){
		squares[i+3].classList.add("square");
	}
	//给六个方块六个随机颜色
	for (var i=0; i<squares.length; i++){
		squares[i].style.background=random_bg_color();
		console.log(squares[i].style.background);
	}
	//随机从六个square里pick a color 作为正确颜色
	corrcetColor=squares[pick(6)].style.background;
	console.log(corrcetColor);
	//在h1里显示这个颜色
	colorDisplay.textContent=corrcetColor;
	//现在可以点方块，看看哪个是正确的方块啦
	checkAnswer(squares);
})
//-------------------------------------------------------------
//现在要开始点击NEW Color了，意思就是要刷新整个游戏
button[0].addEventListener("click",function(){
	//游戏重新开始
	win=false;
	h1.style.background="steelblue";
	//win或try again不显示，为empty string
	message.textContent="";
	//如果上一把赢了，显示的Play agian变成New Color
	button[0].textContent="New Color";
	//如果是easy mode
	if(squares[3].classList.contains("square")==false){
		//给三个方块三个随机颜色
		for (var i=0; i<squares.length-3; i++){
			squares[i].style.background=random_bg_color();
			console.log(squares[i].style.background);
		}
		//随机从三个square里pick a color 作为正确颜色
		corrcetColor=squares[pick(3)].style.background;
		console.log(corrcetColor);
		//在h1里显示这个颜色
		colorDisplay.textContent=corrcetColor;
		//现在可以点方块，看看哪个是正确的方块啦
		checkAnswer(squares);
	}
	//如果是hard mode
	else{
		//给六个方块六个随机颜色
		for (var i=0; i<squares.length; i++){
			squares[i].style.background=random_bg_color();
			console.log(squares[i].style.background);
		}
		//随机从六个square里pick a color 作为正确颜色
		corrcetColor=squares[pick(6)].style.background;
		console.log(corrcetColor);
		//在h1里显示这个颜色
		colorDisplay.textContent=corrcetColor;
		//现在可以点方块，看看哪个是正确的方块啦
		checkAnswer(squares);
	}
})







function checkAnswer(arr){
	for (var i=0; i<arr.length; i++){
		//首先要点一下方块，开始激活游戏
		arr[i].addEventListener("click",function(){
			//先检查游戏是否结束，如果没有结束，才可以继续点击方块
			if(win==false){
				if (this.style.background==corrcetColor){
		            console.log("win!");
		            //如果猜对了，所有的方块都变成正确颜色
		            for (var i=0; i<arr.length; i++){
						arr[i].style.background=corrcetColor;
		            }
		            //win变成true，方块不能再继续点击
		            win=true;
		            //显示win
		            message.textContent="win";
		            //显示play again，点击可以变成新游戏
		            button[0].textContent="Play Again";
		            h1.style.background=corrcetColor;
		        }
				if (this.style.background!=corrcetColor){
					console.log("try again");
					message.textContent="Try Again!";
					//方块变成背景颜色
		            this.style.background=body.style.background;
	        	}
			}   
		});
	}

}





function pick(num){
	var answer=Math.floor(Math.random()*num);
	return answer;
}



function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor ="RGB("+x+", "+y+", "+z+")";
    return bgColor;
    }
