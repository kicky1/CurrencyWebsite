import React, { Component } from 'react';


class Timelane extends Component {
    render() {
        return (
            <section className="page-section" id="history">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Projekty</h2>
                        <h3 className="section-subheading text-muted">Na przedstawionej stronie zostały zrealizowane trzy projekty : czat, przedstawianie walut oraz zamiana walut.</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="subheading">Czat</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Czat działa w oparciu o technologie WebSocket, która zapewnia komunikacje full-duplex. Aplikacja klienta wysyła wiadomość na serwer, który rozsyła ją do wszystkich użytkowników</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="subheading">Waluty</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">W sprawdzaniu walut połączono stronę z API https://api.exchangeratesapi.io/ dzięki czemu po naciśnieciu na przycisk otrzymujemy wszystkie aktualne kursy dla dolara.</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="subheading">Konwerter</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Przy tworzeniu konwertera walut wykorzystano to samo API co w przypadku sprawdzania aktualnych kursów, konwerter innymi słowy jest kalkulatorem walutowym pozwala na obliczenie ile danej waluty dostaniemy za inną. </p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Czekamy na
                                    <br />
                                   dalszy
                                    <br />
                                    rozwój!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Timelane