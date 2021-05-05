const amqp = require("amqplib");

connect();
async function connect() {

    try {
        const amqpServer = "amqp://localhost:5000"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Recieved number ${input.number}`);
            bst = unique_bst(input.number);
            console.log(`No of Unique BST with ${input.number} nodes:${bst}`);
            //acknowledging the message means it will be removed from msg que
            channel.ack(message);
        })

        console.log("Waiting for messages...")

    }
    catch (ex){
        console.error(ex)
    }

}

//finding unique BST
function f(i , n){
       x = g(i-1);
       y = g(n-i);
       if(x==0)return y;
       else if(y==0)return x;
       else return x*y;
   }
function g(n){
      if(n==0)return 0;
      else if(n==1 || n==2)return n;
      cnt = 0;
      for(var i=1;i<=n;i++){
          cnt += f(i,n);
      }
      return cnt;
}
function unique_bst(n){
  return g(n);
}
