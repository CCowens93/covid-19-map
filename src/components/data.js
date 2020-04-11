import React, { Component } from 'react'

import axios from 'axios';

class info extends Component {

    state = {
        dataList: []
    }

    componentDidMount() {
        axios.get('https://covid-19-data.p.rapidapi.com/country', {
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "712bf9e2e1msh66e6efc09c3da2cp176473jsnf55e3b889176"
            },
            "params": {
                "format": "undefined",
                "name": "Italy"
            }
        })
            .then((res) => {
                this.setState({ dataList: res.data })
                console.log(res.data[0].confirmed)
                
            })
    }
    render() {

        console.log(this.state)


        return (
            <div>

            </div>
        )
    }
}

export default info



