//create a file

const fs = require('fs');

/*
fs.writeFile('message.txt', 'Hello there node', function(err){
    if (err) throw err;

    console.log('file has been written');
})



fs.readFile('./message.text', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
})
*/

//reads data from another file

fs.readFile('./message.text', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data)
}); 