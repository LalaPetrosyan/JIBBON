

let black=document.getElementById("black-color")
let cocoa=document.getElementById("cocoa-color")
let tan=document.getElementById("tan-color")
let blush=document.getElementById("blush-color")


let blackimg=document.getElementById("colors-product_black")
let cocaimg=document.getElementById("colors-product_coca")
let tanimg=document.getElementById("colors-product_tan")
let blushimg=document.getElementById("colors-product_blush")

let text=document.querySelector("h1")

let primeryImage=document.getElementById("primery")
let primeryImage1=document.getElementById("primery1")

let forms=document.getElementById("forms")
let write=document.getElementById("write-btn")


function shere(){
  if (fbtw.style.display === "block") {
    fbtw.style.display = "none";
      } else {
        fbtw.style.display = "block";
      }

  }



write.addEventListener("click",()=>{

  if (forms.style.display === "block") {
    forms.style.display = "none";
  } else {
    forms.style.display = "block";
  }


})


function handleFileSelect(evt) {
  let files = evt.target.files; 
  for (let i = 0, f; f = files[i]; i++) {
    if (!f.type.match('image.*')) {
      continue;
    }
 
    let reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
        let span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>',
         '<i class="fal fa-times delete"></i>'].join('');
        document.getElementById('list').insertBefore(span, null);
        console.log(this.img)

      };
    })(f);
    reader.readAsDataURL(f);
  }

  
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);








let acc = document.getElementsByClassName("label");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// function changeImage(event){
//   //  document.querySelector(".colors-product").src=event.children[0];
//   console.log(event)
// }

black.addEventListener("click", (event)=>{
  text.innerHTML="Black"
  blackimg.setAttribute("style", "border:2px solid ;padding: 1px; border-radius: 100%;")
  cocaimg.style.border="none"
  tanimg.style.border="none"
  blushimg.style.border="none"
  primeryImage.src="../images/black1.jpg"
  primeryImage1.src="../images/black1.jpg"

})
cocoa.addEventListener("click", ()=>{
  text.innerHTML="Coca"
cocaimg.setAttribute("style", "border:2px solid ;padding: 1px; border-radius: 100%;")
tanimg.style.border="none"
blushimg.style.border="none"
blackimg.style.border="none"
primeryImage.src="../images/cocoa.jpg"
primeryImage1.src="../images/cocoa.jpg"

})
tan.addEventListener("click", ()=>{
  text.innerHTML="Tan"
  tanimg.setAttribute("style", "border:2px solid ;padding: 1px; border-radius: 100%;")  
  cocaimg.style.border="none"
  blackimg.style.border="none"
  blushimg.style.border="none"
  primeryImage.src="../images/tan.jpg"
  primeryImage1.src="../images/tan.jpg"
})
blush.addEventListener("click", ()=>{
  text.innerHTML="Blush"
  blushimg.setAttribute("style", "border:2px solid ;padding: 1px; border-radius: 100%;") 
 cocaimg.style.border="none"
  tanimg.style.border="none"
  blackimg.style.border="none"
  primeryImage.src="../images/blush.jpg"
  primeryImage1.src="../images/blush.jpg"


})

