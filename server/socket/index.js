var socket=require('socket.io');
class Soc extends socket{
	con()
	{this.sockets.on("connection",function(socket){
		console.log("new user connected"+socket.id)});}
}
module.exports=Soc
