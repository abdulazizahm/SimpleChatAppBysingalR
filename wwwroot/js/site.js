var con = new signalR.HubConnectionBuilder().withUrl("/chatapp").build();
con.on("ReceiveMessage", function (FromUser, message) {
    
    var msg = FromUser + " : " + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
});

con.start();
$("#btnSend").on("click", function ()
{
    var FromUser = $("#txtUser").val();
    var message = $("#txtMessage").val();
    con.invoke("SendMessage", FromUser, message);
})
