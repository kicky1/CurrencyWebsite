import React, {Component} from 'react';
import Currencies from "../Currencies";




class CurrencySite extends Component {
    render(){
        return(
            <section className="page-section bg-light" id="currency">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Currency</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <Currencies/>
                    </div>
                </div>
            </section>
        )
    }
}

export default CurrencySite