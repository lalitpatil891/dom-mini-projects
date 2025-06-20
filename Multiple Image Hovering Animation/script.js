var elem = document.querySelectorAll(".elem")

// console.log(elem)

elem.forEach(function(val){

  console.log(val.childNodes[3])

  val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity = 1;
    // console.log("entered")
  });

  val.addEventListener("mouseleave", function(){
      val.childNodes[3].style.opacity = 0;
    // val.style.backgroundColor = "black"
    // console.log("Leaved")
  });

  val.addEventListener("mousemove", function(dets){
      val.childNodes[3].style.left = dets.x+"px";
      // val.childNodes[3].style.top = dets.y+"px";
  });
});






/*var elem1 = document.querySelector("#elem1")
var elemImage = document.querySelector("#elem1 img")

elem1.addEventListener("mousemove", function(dets){

  elemImage.style.left= dets.x+"px";
  elemImage.style.top = dets.y+"px";
})

elem1.addEventListener("mouseenter", function(dets){
  elemImage.style.opacity = 1;
})

elem1.addEventListener("mouseleave", function(dets){
  elemImage.style.opacity= 0;
}) */
