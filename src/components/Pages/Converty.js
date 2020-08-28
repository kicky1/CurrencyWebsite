import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import ConverterSite from '../Common/ConverterSite';


class Converty extends Component {
    render(){
        return(
            <div>
                <Header
                    title = "Notowania walut dostępne w systemie transakcyjnymt"
                    subtitle = "Kalkulator walutowy"
                    buttonText = "Odkryj"
                    showButton={false}
                    image={image}
                />
                <ConverterSite/>
            </div>
        )
    }

}

export default Converty;