var elUSER1 = document.querySelector(".box_image_vs_name1")
var elUSER2 = document.querySelector(".box_image_vs_name2")
var elUSER3 = document.querySelector(".box_image_vs_name3")
var elBTN1 = document.querySelector(".about_btn1")
var elBTN2 = document.querySelector(".about_btn2")

elBTN1.addEventListener("click", function(){
    elUSER1.style.display = "flex"
    elUSER2.style.display = "none"
    elUSER3.style.display = "none"
   
})
elBTN2.addEventListener("click", function(){
    elUSER1.style.display = "none"
    elUSER2.style.display = "flex"
   elUSER3.style.display = "none"
})
elBTN1.addEventListener("click", function(){
    elUSER1.style.display = "none"
    elUSER2.style.display = "none"
   elUSER3.style.display = "flex"
})
