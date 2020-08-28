import React, { Component } from 'react';
import TeamMembers from './TeamMembers';
import img1 from '../assets/img/team/TomaszGruzdzis.jpg'
import img2 from '../assets/img/team/KrzysztofWicki.jpg'



const members = [
    { title: 'Tomasz Gruzdzis', subtitle: 'Współzałożyciel', image: img1, github: 'https://github.com/TWokulski', facebook: 'https://www.facebook.com/tomek.gruzdzis', linkedin: 'https://www.linkedin.com/in/tomasz-gruzdzis-69bb521b5/' },
    { title: 'Krzysztof Wicki', subtitle: 'Współzałożyciel', image: img2, github: 'https://github.com/kicky1', facebook: 'https://www.facebook.com/kwicki', linkedin: 'https://www.linkedin.com/in/krzysztof-wicki-ba19571b5/' }

];

class Team extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Projekt wykonali</h2>
                        <h3 className="section-subheading text-muted">Uczniowie Politechniki Gdańskiej z wydziału Elektroniki i Telekomunikacji.</h3>
                    </div>
                    <div className="row">
                        {members.map((member, index) => {
                            return <TeamMembers {...member} key={index} />
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Praca została zlecona jako projekt na przedmiot Protokoły wymiany danych w systemach.</p></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team 