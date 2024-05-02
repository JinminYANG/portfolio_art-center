"use strict";
var pagenation=document.querySelector(".pagenation"),
pageBtn=pagenation.querySelectorAll(".pageBtn"),
pageNum=pagenation.querySelectorAll(".pageNum"),
pageNumArray=[],
j=0;

function pageMove(e){
	e.preventDefault(),
	this.classList.contains("prevBtn")&&0!==j?j--:this.classList.contains("nextBtn")&&j!==pageNumArray.length-1&&j++,
	pageNum.forEach(function(i){
		i.classList.remove("active")
	}),pageNum[j].classList.add("active")
}
function pageNumClick(e){
	e.preventDefault(),
	pageNum.forEach(function(i){
		i.classList.remove("active")
	}),this.classList.add("active")
	,j=pageNumArray.indexOf(this)
}
function init(){
	pageNum.forEach(function(e){
		e.addEventListener("click",pageNumClick),
		pageNumArray.push(e)
	}),pageBtn.forEach(function(e){
		e.addEventListener("click",pageMove)
	})
}

init();