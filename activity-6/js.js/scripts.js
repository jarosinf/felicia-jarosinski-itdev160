var messages [];
//message constructor to create objects
function message ()
{
  this.messages
  messages.Send('send a message!')
  messages.Reply('reply to message!')
}
//add a new message when send or reply button used
addMessageHandler (successMessage)
{//message object
  var messageReceive =
  {
    type: 'success',
    value: successMessage
  };
  this.setState({messageReceive: messageReceive});
}
//which button clicked? options for selections
switch(messages)
{
  case "send":
  text = "Sending a Message";
  break;
  case "reply":
  text = "Replying to a Message";
  break;
  default:
  text = "Encountered Error-try again later";
}
//css classes to differentiate
.Send {display: out-message}
.Reply {display: in-message}
//initialize app
init: Message (send, reply)
{
  this.send = send;
  this.reply = reply;
}
//wire addMessageHandler to onclick events for each button/action
document.getElementById('send-button').onclick = addMessageHandler;
document.getElementById('reply-button').onclick = addMessageHandler;
//getting things started
init();
