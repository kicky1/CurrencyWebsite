import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import Services from '../Common/Services';


class Services extends Component {
    render(){
        return(
            <div>
                <Header
                    title = "Notowania walut dostępne w systemie transakcyjnymt"
                    subtitle = "Kursy walut"
                    buttonText = "Odkryj"
                    showButton={false}
                    image={image}
                />
                <Services/>
            </div>
        )
    }

}

export default Services;