"use strict";var fqaBoxContainer=document.querySelector(".fqaBox ul"),fqaBoxList=fqaBoxContainer.querySelectorAll(".fqaBox__list"),listAnswerAll=fqaBoxContainer.querySelectorAll(".list__answer");function anwserClass(e){e.preventDefault();var listAnswer=this.nextElementSibling,icon=this.querySelector(".arrow");listAnswer.classList.contains("active")?(listAnswer.classList.remove("active"),icon.style.transform="translateY(-50%) rotate(0deg)"):(listAnswerAll.forEach(function(i){i.classList.remove("active"),icon.style.transform="translateY(-50%) rotate(0deg)"}),listAnswer.classList.add("active"),icon.style.transform="translateY(-50%) rotate(180deg)")}function init(){fqaBoxList.forEach(function(e){var listTit=e.querySelector(".list__tit");listTit.addEventListener("click",anwserClass)})}init();