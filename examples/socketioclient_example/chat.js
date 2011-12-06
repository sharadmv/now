var nowjs = require('./now/lib/client/now-socketioclient.js');
var now = nowjs.nowInitialize('http://localhost:8080');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("> ",2);
rl.on('line', function(line){
    now.distributeMessage(line);
});
now.ready(function(){
    console.log("Chat server running!");
    rl.question("What's your name? ",function(answer){
        now.name = answer;
    });
});
now.receiveMessage = function(message,name){
    console.log("----"+name+": "+message);
}
