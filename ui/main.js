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
        if (request.readyState ===  XMLHttpRequest.DONE) {
            if(request.status===200){
                //Render the variable in the correct span
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
            
        }
    };
    
    request.open('GET', 'http://karthik87ck.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Req and Resp
var nameinput = document.getElementById("name");
var submitbtn = document.getElementById("submitbtn");
var name = nameinput.value;
submitbtn.onclick = function(){
  //Send a request with the name
  //Get the Response as a list and render it in the HTML list
  var names = ['list1', 'list2', 'list3'];
  var list = '';
  for(var i=0; i<names.length; i++){
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById("namelist");
  ul.innerHTML = list;
};