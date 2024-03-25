const ImgBox = document.querySelector(".img_box");
const imgWrap = document.querySelector(".img_wrap");
const originalImg = document.getElementById("originalImg");
originalImg.style.width = ImgBox.offsetWidth + "px";
const leftSpace = ImgBox.offsetLeft;
ImgBox.onmousemove = function(e){
   const boxWidth =  (e.pageX- leftSpace) + "px";
   imgWrap.style.width = boxWidth;

}