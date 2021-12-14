using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Hubs
{
    public class ChatHubs:Hub
    {
        public async Task SendMessage(string FromUser,string message) 
        {
            await Clients.All.SendAsync("ReceiveMessage", FromUser, message);
        }
    }
}
