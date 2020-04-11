import React, { Component } from 'react'
import axios from 'axios'


// axios({
//     "method": "GET",
//     "url": "https://covid-19-data.p.rapidapi.com/country",
//     "headers": {
//         "content-type": "application/octet-stream",
//         "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
//         "x-rapidapi-key": "712bf9e2e1msh66e6efc09c3da2cp176473jsnf55e3b889176"
//     }, "params": {
//         "format": "undefined",
//         "name": "italy"
//     }
// })
//     .then((response) => {
//         console.log(response)
//     })
//     .then(dataList => {
//         this.setState({ response: dataList })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

class Stats extends Component {

    state = {
        dataList: [{
            // country: String,
            // confirmed: '',
            // recovered: '',
            // critical: '',
            // deaths: '',
            // latitude: '',
            // longitude: '',
            dataList: []
        }]
    }


    componentDidMount = () => {
        axios.get("https://covid-19-data.p.rapidapi.com/country", {
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
            // .then((response) => {
            //     console.log(response.data[0])
            // })
            .then((response => {
                this.setState({ dataList: response.data })
            }))

            .catch((error) => {
                console.log(error)
            })
    }


    render() {

        console.log(this.state.dataList[0])

        const country = this.state.dataList[0].country
        const confirmed = this.state.dataList[0].confirmed
        const recovered = this.state.dataList[0].recovered
        const critical = this.state.dataList[0].critical
        const deaths = this.state.dataList[0].deaths


        return (
            <div>
                {/* <ul>
                        {this.state.covid.map((data, index) => (
                            <li key={index}></li>
                        ))}
                    </ul> */}
                <p>Country: {country}</p>
                <p>Confirmed: {confirmed}</p>
                <p>Recovered: {recovered}</p>
                <p>Critical: {critical}</p>
                <p>Deaths: {deaths}</p>
            </div>
        )
    }
}


export default Stats




