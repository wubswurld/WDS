import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
class PayPalBtn extends Component {
    state = {
            total: ''
    }
  render(){
    //   console.log(this.state.total)
    const onSuccess = (payment) => {
        // Congratulation, it came here means everything's fine!
                console.log("The payment was succeeded!", payment);
                // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onCancel = (data) => {
        // User pressed "cancel" or close Paypal's popup!
        console.log('The payment was cancelled!', data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onError = (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }

    let env = 'sandbox'; // you can set here to 'production' for production
    let currency = 'USD'; // or you can set this value from your props or state
    let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
    let style = {
        'label':'pay',
        'tagline': false,
        'size':'small',
        'shape':'rect',
        'color':'blue'
    };
    const client = {
        sandbox:    'AZT_dBYydwex8yyEx3sLMLzIncAuM4obHaFVZ4s66kT5_MaSJfeHzd5WzXl4zKReIdKcb7afoW80S8g3',
        production: 'AQNCrx40i1H7Dyyx_O7ykiFoVVS0ojH-yodMNReLGp9P3DjqUAHlYlqGO2_T36iFTVOO7IjNRpQP9U6T',
    }
    return (
        <>
        <PaypalExpressBtn env={env} client={client} currency={currency} style={style} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        </>
    );
  }
}

export default PayPalBtn;