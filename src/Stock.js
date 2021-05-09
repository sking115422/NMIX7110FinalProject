import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

import Plot from 'react-plotly.js'

import './stockStyles.css'

import Bull from './img/bull.jpg'
import Bear from './img/bear.jpg'

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
            stockTicker: 'AMZN',
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({stockTicker: event.target.value});
        console.log(this.state.stockTicker)
      }

    handleSubmit(event) {

    this.setState({stockTicker: event.target.value})

    alert('Stock ticker was changed to: ' + this.state.stockTicker)
    console.log(this.state.stockTicker)
    event.preventDefault()
    
    this.fetchStock()

    }

    componentDidMount() {
        this.fetchStock()
    }


    fetchStock() {
        const pointerToThis = this;
        const API_KEY = '71X50UAFMMM51Z8R';

        console.log(this.state.stockTicker)

        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.stockTicker}&outputsize=full&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];


        fetch(API_Call) 
            .then(
                function (response) {

                    console.log(response.json)
                    return response.json();
                }
                    
            )
            .then(
                function (data) {

                    for (var key in data['Time Series (Daily)']) {
                        
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    console.log(pointerToThis)
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction,
                        stockTicker: data['Meta Data']['2. Symbol']
                    });

                }
            )

    }
    

    render() {
        return(
            <div id = "maincont">
                <Row>
                    <Col id = "bull">
                        <img className = "imghome" src = {Bull} alt = ""/>
                    </Col>
                    <Col id = "col2">
                        <Row>
                            <h1 id = "title"> Stock Charting Application</h1>
                        </Row>
                        <Row id = "about">
                            <a href = "https://github.com/sking115422/NMIX7110FinalProject#readme" > About This App</a>
                        </Row>
                        <Row>
                            <Form inline id = "searchform" className='mx-auto' onSubmit={this.handleSubmit}>

                                <Form.Control id = "formcontrol"
                                    placeholder = "Enter Stocker Ticker"
                                    value={console.log(this.state.stockerTicker)}
                                    onChange={this.handleChange}
                                /> 

                                <Button variant = "success"  type="submit">
                                    Search
                                </Button>
      
                            </Form>
                        </Row>

                    </Col>
                    <Col id = "bear">
                        <img className = "imghome" src = {Bear} alt = ""/>
                    </Col>
                </Row>
                

                <div id = "plot">
                    <Plot
                        data={[
                            {
                                x: this.state.stockChartXValues,
                                y: this.state.stockChartYValues,
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: {color: '#61dafb'},
                                name: 'Stock Price (USD)'
                            }
                        ]}
                        layout={{
                            width: '1200', 
                            height: '650', 
                            title: `Ticker: ${this.state.stockTicker}`,
                            font: {
                                size:16
                            },
                            borderradius: '30px',
                            legend: {
                                x: 1, y: 1, traceorder: 'normal',
                                font: {
                                    family: 'sans-serif', size: 16, color: 'black'
                                },
                                showlegend: true,
                                bgcolor: 'lightgrey',
                                bordercolor: 'grey',
                                borderwidth: 2
                            },
                            showlegend: true, 
                        }}
                    />
                </div>    

            </div>
        )
    }

}

export default Stock;