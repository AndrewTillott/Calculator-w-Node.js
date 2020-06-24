// Please see Node JS implemented at the bottom of Index.JS file

let test1 = 2 + 2;



let test2 = () =>{
    console.log('this is a test')
}

/*
module.exports = test;

Above is how you write it if you are just exporting one thing. Below this comment box I will demonstrate sending multiple.
*/

module.exports.test1 = test1;

module.exports.test2 = test2;

console.log(__filename);