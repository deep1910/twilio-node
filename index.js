const express = require('express')
const client = require('twilio')('AC38d06ebf79abe790d3d5a06775e73b34', '4e9129c840e41386f869b75234e95d3f');

const app = express()
const port  = 3001

app.get('/', (req,res)=>{

    sendTextMessage();
    res.send(`
    <div style="text-align:center; padding-top:40px; background-coolor:red;">
    <h1>Your message has been sent successfully</h1>
    
    
    </div>
    
    
    
    `);
})

app.listen(port, () =>{
    console.log(`example app listening at http://localhost:${port}`);
}
)


function sendTextMessage(){
 
client.messages
  .create({
     body: 'Hello wrold from deep pande',
     from: '+19804948593',
     to: '+917038748098'
   })
  .then(message => console.log(message.sid));

   
}

function   () {
    
    
}