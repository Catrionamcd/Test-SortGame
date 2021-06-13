 let  newTile = document.createElement("div");
 newTile.className = ("tile");
 newTile.style.left = "150px";
 newTile.style.top = "300px";

 let wrapperDiv = document.getElementById("game-area");
 wrapperDiv.appendChild(newTile);
 var animateTile = false;
 
 newTile.onclick = function() {activateAnimate()};
 
 var movCount = 0;
 var movDir = 1;

 setInterval(movTile, 1);

 function activateAnimate() {
     animateTile = true;
 }
 function movTile() {
     if (!animateTile) {
         return;
     }
     let currLeft = parseInt(newTile.style.left, 10);
     newTile.style.left = (currLeft + movDir) + "px";
     if (++movCount > 200) {
         movCount = 0;
         movDir *= -1;
         animateTile = false;
     } 
 }


   
