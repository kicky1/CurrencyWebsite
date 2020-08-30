import React, {Component} from 'react';
import Chat from '../Chat';


class Chatter extends Component {
    render(){
        return(
            <section className="page-section bg-light" id="chatter">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Chatter</h2>
                        <h3 className="section-subheading text-muted">Aby wysyłać wiadomości podaj swój nick, aby sprawdzić działanie czatu otwórz stronę w drugim oknie i stwórz nowego użytkownika podającu drugi nick, życzymy miłej konwersacji.</h3>
                    </div>
                    <div className="row">
                        <Chat/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Chatter