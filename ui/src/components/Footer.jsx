import React from 'react'
import logo from '../image/logo.png';

const Footer = (props) => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 footer-about wow fadeInUp">
                            <img className="logo-footer" src={logo} alt="MKonsulting" data-at2x="assets/img/logo.png" />
                            <p>
                                Nous sommes une jeune entreprise toujours à la recherche d'idées nouvelles et créatives pour
                                vous aider dans notre
                                produits dans votre travail quotidien.
                                </p>
                            <p><a href="#">Notre équipe</a></p>
                        </div>
                        <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
                            <h3>Contact</h3>
                            <p><i className="fas fa-map-marker-alt"></i> Via Rossini 10, 10136 Turin Italy</p>
                            <p><i className="fas fa-phone"></i> Phone: (0039) 333 12 68 347</p>
                            <p><i className="fas fa-envelope"></i> Email: <a href="mailto:hello@domain.com">hello@domain.com</a>
                            </p>
                            <p><i className="fab fa-skype"></i> Skype: you_online</p>
                        </div>
                        <div className="col-md-4 col-lg-3 footer-social wow fadeInUp">
                            <h3>Follow us</h3>
                            <p>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-pinterest"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;