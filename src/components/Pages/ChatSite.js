import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import Chatter from '../Common/Chatter';




class ChatSite extends Component {
    render(){
        return(
            <div>
                <Header
                    // title = "Chat"
                    subtitle = "Czat"
                    buttonText = "Odkryj"
                    showButton={false}
                    image={image}
                />
                <Chatter/>        
            </div>
        )
    }

}

export default ChatSite;