import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import Portfolio from '../Common/Portfolio';


class AboutUs extends Component {
    render(){
        return(
            <div>
                <Header
                    title = "Nasza firma funkcjonuje od wielu lat"
                    subtitle = "Dokonania"
                    buttonText = "Odkryj"
                    showButton={false}
                    image={image}
                />
                <Portfolio/>        
            </div>
        )
    }

}

export default AboutUs;