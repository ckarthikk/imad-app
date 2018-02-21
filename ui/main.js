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
var btn = document.getElementById("ch");
btn.onclick = function(){
    //Req to counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in an variable
    request.onreadystatechange=function(){
        if(request.readystate ===  XMLHttpRequest.DONE){
            if(request.status===200){
                //Render the variable in the correct span
                var counter = request.responseText;
                var cnter = document.getElementById('count');
                cnter.innerHTML = counter.toString();
            }
            
        }
    };
    request.open('GET', 'http://karthik87ck.imad.hasura-app.io/counter', true);
    request.send(null);
};