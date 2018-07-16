//crud API
//create read update and delete

//the callback function will run everytime a request to get is made
//export the function app.get with 2 parameters
module.exports = function(app, database){
    //we always get two parameters a request and a response
    app.get('/', function (req, res) {
    // res.send('Hello World')

    //queryis a function where the first parameter is the query and the second parameter is the callback function
    res.send(`<div style="font-size: 45px;">Hello World</div>`);
  });
}

