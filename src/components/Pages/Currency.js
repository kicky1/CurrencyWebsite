import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header3.jpg';
import CurrencySite from '../Common/CurrencySite';


class Currency extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Notowania walut dostępne w systemie transakcyjnymt"
                    subtitle="Kursy walut"
                    buttonText="Odkryj"
                    showButton={false}
                    image={image}
                />
                <CurrencySite />
            </div>
        )
    }

}

export default Currency;