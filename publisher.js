const amqp = require("amqplib");

//n=0;

connect();
async function connect() {

    try {
    //    n++;
        const msg = {number: process.argv[2]}
        const amqpServer = "amqp://localhost:5000"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Number sent successfully ${msg.number}`);
        await channel.close();
        await connection.close();
    }
    catch (ex){
        console.error(ex)
    }
    //setTimeout(connect, 3000);
}
