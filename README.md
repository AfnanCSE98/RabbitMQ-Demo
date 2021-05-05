# RabbitMQ-Demo
This is a simple demo of RabbitMQ with NodeJS.You can publish a message(in this case , a number) in the queue and the consumer will receive the number and calculate how many Unique BST can be formed with that number of nodes.

### How to run
Spin up a docker container of rabbitmq image
```
sudo docker run --name rabbitmq -p 5000:5672 rabbitmq
```
It will start a docker container running on your machine at port 5000.Remember that 5672 is the default port of RabbitMQ.

Install NodeJS and then install amqplib by `npm install amqplib`.

To publish a number to the message broker, for example 9 ,run
```
node publisher.js 9
```
and you will see a confirmation message.Then start your consumer by running 
```
node consumer.js
```
and you will see the number is received and count of unique BST is calculated by the consumer.For number 20 or 25,it might take a few seconds to calculate BST count after receiving the number.

If you publish another number , you will see the consumer receiving it immediately.

In the consumer module , I have acknowledged all the messages received from the publisher.You can add any condition if you want

