import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-usable components

import Timelane from '../Common/Timelane';
import Team from '../Common/Team';


class Home extends Component {
    
    render(){
        return (
            <div>
                <Header
                    title = "strona służąca do sprawdzania kursów walut"
                    subtitle = "Witaj"
                    buttonText = "Waluty"
                    link="/currency"
                    showButton={true}
                    image={image}

                />
                <Timelane/>
                <Team/>
            </div>
        )
    }
}

export default Home;