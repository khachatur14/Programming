var vt = 0;
function main() {
   var socket = io();
   var chatDiv = document.getElementById('chat');
   var input = document.getElementById('message');
   var button = document.getElementById('submit');
   var remove = document.getElementById('remove');

   function handleSubmit(evt) {
       var val = input.value;
       if (val != "") {
           socket.emit("send message", val);
       }
   }
    function deleteSubmit(evt) {
       var val = input.value;
        socket.emit("remove message", true);
   }
   button.onclick = handleSubmit;
   remove.onclick = deleteSubmit;
   function handleMessage(msg) {
        var np = document.getElementsByTagName("p");
        if(typeof msg == "boolean" && msg){
            chatDiv.removeChild(np[np.length - 1]);
        }
        else{
        console.log(msg);
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
        }
    }

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;
