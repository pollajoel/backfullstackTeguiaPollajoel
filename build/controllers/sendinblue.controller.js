"use strict";


module.exports.Add = (req, res)=>{

    res.send({email:"pollajoel2017@gmail.com"})

    var email = req.body.email;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var data = JSON.stringify({"updateEnabled":false,"email":email});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
    };

    fetch("localhost:3000/api/newsletterSubcription", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}