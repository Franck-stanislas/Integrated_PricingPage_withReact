import React from 'react'

const Navbar = (props) => {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-light bg-white py-4">
                    <a className="navbar-brand" href="#">
                        <img className="img-fluid" src="./image/logo.png" alt="MKonsulting"/>
                    </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="mdi mdi-menu"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="btn btn-transparent btn-sm" href="#">Connexion</a>
                                </li>
                                <li>
                                    <a className="btn btn-transparent btn-sm" href="#">Inscription</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-success btn-sm js-launch-fast" href="#">Publier un projet</a>
                                </li>
                            </ul>
                        </div>
            </nav>
        </div>
    </header>
    );
}

export default Navbar;