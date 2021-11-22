let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
var span = document.getElementById("closee")

let modal1 = document.getElementById("myModal1");
let btn1 = document.getElementById("myBtn1");
let span1 = document.getElementById("close1")

let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("myBtn2");
let span2 = document.getElementById("close2")

let modal3 = document.getElementById("myModal3");
let btn3 = document.getElementById("myBtn3");
let span3 = document.getElementById("close3")




// btn.onclick = function() {
//     modal.style.display = "block";
//   }
  
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
  
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
  
  
// modal 1
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  if (modal1.style.display === "block") {
    modal1.style.display = "none";
      } else {
        modal1.style.display = "block";
      }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// modal 2
btn2.onclick = function() {
    modal2.style.display = "block";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }

  // modal 3
btn3.onclick = function() {
    modal3.style.display = "block";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }