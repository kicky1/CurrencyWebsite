import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class Currencies extends Component {
  state = {
    currencies: ["CAD", "HDK", "GBP", "NOK", "USD", "AUD", "SGD", "CHF", "EUR", "PLN"],
    base: "USD",
    amount: "1",
    convertTo: "EUR",
    convertToPLN: "PLN",
    convertToCAD: "CAD",
    convertToHDK: "HDK",
    convertToGBP: "GBP",
    convertToNOK: "NOK",
    convertToAUD: "AUD",
    convertToSGD: "SGD",
    convertToCHF: "CHF",
    convertToEUR: "EUR",
    result: "",
    date: ""
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          const date = data.date;
          const result2 = (data.rates[this.state.convertToPLN] * 1).toFixed(4);
          const result3 = (data.rates[this.state.convertToCAD] * 1).toFixed(4);
          const result5 = (data.rates[this.state.convertToGBP] * 1).toFixed(4);
          const result6 = (data.rates[this.state.convertToNOK] * 1).toFixed(4);
          const result7 = (data.rates[this.state.convertToAUD] * 1).toFixed(4);
          const result8 = (data.rates[this.state.convertToSGD] * 1).toFixed(4);
          const result9 = (data.rates[this.state.convertToCHF] * 1).toFixed(4);
          const result10 = (data.rates[this.state.convertToEUR] * 1).toFixed(4);
          this.setState({
            date,
            result2,
            result3,
            result5,
            result6,
            result7,
            result8,
            result9,
            result10,
          });
        });
    }
  };

  handleSwap = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };
  render() {

    const { base, date, result2, result3, result4, result5, result6, result7, result8, result9, result10 } = this.state;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>
                1 {base} = {result2} PLN
                </h5>
            </div>
            <div className="card card-body">
              <h5>
                1 {base} = {result3} CAD
                </h5>
            </div>
            <div className="card card-body">
              <h5>
                1 {base} = {result5} GBP
                </h5>
            </div>
            <div className="card card-body">
              <h5>
                1 {base} = {result6} NOK
                </h5>
            </div>
            <div className="card card-body">
              <h5>
                1 {base} = {result7} AUD
                </h5>
            </div>
            <div className="card card-body">
              <h5>
                1 {base} = {result8} SGD
                </h5>
            </div>
            <div className="card card-body">
              <h5>
                1 {base} = {result9} CHF
                </h5>
            </div>
            <div className="card card-body">
              <h5>
                1 {base} = {result10} EUR
                </h5>
            </div>
            <div className='center'></div>
            <Button variant="contained"
              onClick={this.handleInput}>Sprawdź</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Currencies;
