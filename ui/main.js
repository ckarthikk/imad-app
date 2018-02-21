console.log('Loaded!');
var text = document.getElementById("maintext");
text.innerHTML = "New Value";

var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function() {
  var interval = setInterval(moveRight, 50);
};

//Counter Code
var counter = 0;
var btn = document.getElementById("ch");
btn.onclick = function(){
    //Req to counter endpoint
    
    //Capture the response and store it in an variable
    
    //Render the variable in the correct span
    counter = counter+1;
    var cnter = document.getElementById("count");
    cnter.innerHTML = counter.toString();
};