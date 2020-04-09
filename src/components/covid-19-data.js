import React, { Component } from 'react'

const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://covid-19-data.p.rapidapi.com/totals",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
    "x-rapidapi-key":"712bf9e2e1msh66e6efc09c3da2cp176473jsnf55e3b889176"
    },"params":{
    "format":"undefined"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })


class data extends Component{

    
    render(){
        return(
            <div>
                    <h1>Data</h1>
            </div>
        )
    }
}

export default data