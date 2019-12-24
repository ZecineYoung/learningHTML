function $id(name){
	return document.getElementById(name);
}
function $class(name){
	return document.getElementsByClassName(name);
}
// console.log($class("imag"))
// var span = document.querySelectorAll("span");
// console.log($id("dot").querySelectorAll("span"));

var spanList = $id("dot").querySelectorAll("span");
//右边的翻页按钮
$id("right").addEventListener("click",clickPageRight);
// console.log($id("left"));
// console.log($class("imag"))
function clickPageRight(){
	for(let i=0;i<$class("imag").length;i++){
		// console.log(i)
		if($class("imag")[i].classList.contains('active')){
			
			spanList[i].classList.remove("activeSpan");
			$class("imag")[i].classList.remove("active");
			index = i%$class("imag").length + 1;
			// console.log(index)
			if(index==$class("imag").length){
				// console.log(index)
				index=0;
				spanList[index].classList.add("activeSpan");
				$class("imag")[index].classList.add("active");
				break;
			}else{
				spanList[index].classList.add("activeSpan");
				$class("imag")[index].classList.add("active");
				break;
			}
		}
	}
	var src = $('#wrap').find('.active img').data('src');
	$('#wrap').find('.active img').attr('src', src);	
}

//左边的翻页按钮
$id("left").addEventListener("click",clickPageLeft);
function clickPageLeft(){
	for(let i=0;i<$class("imag").length;i++){
		if($class("imag")[i].classList.contains('active')){
			spanList[i].classList.remove("activeSpan");
			$class("imag")[i].classList.remove("active");
			index = i%$class("imag").length - 1;
			if(index==-1){
				index = $class("imag").length-1;
				spanList[index].classList.add("activeSpan");
				$class("imag")[index].classList.add("active");
				break;
			}else{
				spanList[index].classList.add("activeSpan");
				$class("imag")[index].classList.add("active");
				break;
			}
		}
	}
	var src = $('#wrap').find('.active img').data('src');
	$('#wrap').find('.active img').attr('src', src);	
}

//自动翻页
var timer = setInterval(clickPageRight,2000);

//鼠标飘过暂停
$id("wrap").addEventListener("mouseover",clearTimer);
function clearTimer(){
	clearInterval(timer);
}

//鼠标移开继续
$id("wrap").addEventListener("mouseout",goOn);
function goOn(){
	timer = setInterval(clickPageRight,2000);
}

// $id('dot').addEventListener("click",clickDot);
// function clickDot(e){
// 	for(let index=0;index < spanList.length;index++){
// 		if(spanList[index].classList.contains("activeSpan")){
// 			spanList[index].classList.remove("activeSpan");
// 			$class("imag")[index].classList.remove("active");
// 			e.target.classList.add("activeSpan");
// 			// console.log(tihs.parentNode.childNodes);
// 			console.log(e.target.childNodes)
// 			// $class("imag")[e.index].classList.add("active");
// 		}
// 	}
// }

(function(){
	var src = $('.imag.active img').data('src');
	$('.imag.active img').attr('src', src);
})()

for(let index=0;index<spanList.length;index++){
	// if(spanList[index].classList.contains("activeSpan")){
	// 		spanList[index].classList.remove("activeSpan");
	// 		// console.log(index)
	// 		$class("imag")[index].classList.remove("active");
	// 	}
	
	spanList[index].onclick=function(){
		for(let index=0;index<spanList.length;index++){
			if(spanList[index].classList.contains("activeSpan")){
					spanList[index].classList.remove("activeSpan");
					console.log(index)
					$class("imag")[index].classList.remove("active");
				}
			}
		spanList[index].classList.add("activeSpan");
		$class("imag")[index].classList.add("active");
		var src = $('#wrap').find('.active img').data('src');
		$('#wrap').find('.active img').attr('src', src);		
	}
}

