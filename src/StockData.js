import React, {useEffect,useState} from 'react'
import {Form} from 'react-bootstrap';
import { Formik } from 'formik'
import * as yup from 'yup'


function StockData(){

    const [stockChartXValues, setXValues] = useState([]);
    const [stockChartYValues, setYValues] = useState([]);
    const [stockTicker, setTicker] = useState(['']);


    let API_KEY = '71X50UAFMMM51Z8R';
    let StockTicker = 'AMZN';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockTicker}&outputsize=compact&apikey=${API_KEY}`;

    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    useEffect(() => {

        fetch(API_Call) 
        .then(
            function (response) {
                return response.json();
            }
                
        )
        .then(
            function (data) {
                console.log(data)

                for (var key in data['Time Series (Daily)']) {
                        
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                }

                setXValues ({stockChartXValuesFunction}, [])
                setYValues ({stockChartYValuesFunction}, [])
                setTicker (data['Meta Data']['2. Symbol'],[]) 

                console.log(stockChartXValues)
                console.log(stockChartYValues)
                console.log(stockTicker)

            }
        )

    });


    const validationSchema = yup.object().shape({
        ticker: yup.string()
            .min(1, 'Please enter a ticker symbol!')
            // .matches(/^[aA-zZ]+$/ , 'Please enter a valid ticker symbol!')
            .required('Ticker symbol is required!'),
    })

    return(
        <>
            <div>
                <h1> Stock Market Analizer</h1>
                <div>
                    <h2>Enter A Stock Ticker</h2>
                    <Formik 
                        initialValues={{ticker: ''}} 
                        onSubmit={async (data, {setSubmitting}) => {
                            setSubmitting(true)
                        }}
                        validationSchema={validationSchema}
                    >{({ 
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        errors,
                        setSubmitting
                    }) => (
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    type = 'text'
                                    placeholder = 'AMZN' 
                                    value = {values.ticker}
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                            </Form.Group>
                        </Form>
                    )}</Formik>

                </div>
            </div>
        </>
    )

}

    

export default StockData