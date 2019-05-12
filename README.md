
Q. When is it a good idea to not use NodeJs? Why? 
Ans. Node.js is not good for CPU intensive application due to its single threaded model. So If an application have large calculation like, scientific calculation in robotics and huge calculations in space craft application in these cases it is not idea to use Node.js it is good to go for some other languages like python or java.

Node.js is not good for  processing heavy CPU bound tasks because of its single thread model. Node Js is  based on a non blocking I/O model, it answers the client call to start the task, process the task while it start callback, as the task is ready processing task asynchronously. Whenever, a heavy task comes fro processing to event-loop, Node will set the available CPU to preocess it first, and then answer the requested queue which cause slow processing and overall dealy in the execution  of event-loop. Thus, Node.js is not recommended for heavy computation.

-- clone the repo git clone https://github.com/akhilbharti/oncehub-test.git
-- cd oncehub-test
-- run npm install
-- to run http server go to project folder and type node app.js
-- hit the api through postman or browser


api details - 
1. getMarcoPoloGame    - return the series with success true or false.




