var socket = io("http://localhost:3000");

socket.on("disconnect", function(){
   setTitle("Disconnected"); 
});

socket.on("connect", function(){
   setTitle("Connected to Chat");
    
});

socket.on("message", function(message){
   displayMsg(message); 
});

document.forms[0].onsubmit = function(){
  var input = document.getElementById("message");
  displayMsg(input.value);
  socket.emit("chat", input.value);
  input.value = '';
};

function setTitle(title){
    document.querySelector("h1").innerHTML = title;
}

function displayMsg(message){
 
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}