import React, { Component } from 'react';
import Converter from "../Converter";




class ConverterSite extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="converty">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Converter</h2>
                        <h3 className="section-subheading text-muted">Przy tworzeniu konwertera walut wykorzystano to samo API co w przypadku sprawdzania aktualnych kursów, konwerter innymi słowy jest kalkulatorem walutowym pozwala na obliczenie ile danej waluty dostaniemy za inną.</h3>
                    </div>
                    <div className="row">
                        <Converter />
                    </div>
                </div>
            </section>
        )
    }
}

export default ConverterSite