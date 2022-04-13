const fs = require('fs');


// Create File

fs.writeFile('demo.txt','This is a Demo File 05 ',(err)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('Successfully Done');
    }
});


// Append File

fs.appendFile('demo.txt','This is a Demo File 05 ',(err)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('Successfully Done');
    }
});


// read File

fs.readFile('demo.txt', 'utf-8',(err, data)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('Successfully Done', data);
    }
});





//Rename File

fs.rename('demo.txt', 'demo-2.txt',(err)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('Successfully Done');
    }
});


// Delete File 

fs.unlink('demo-2.txt',(err)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('Successfully Deleted');
    }
});