import React from 'react';
import "./css/style.css";

import Navbar from "./components/Navbar";
import PageContent from "./page/PageContent";
import TableComparison from "./components/TableComparison";
import CurrentQuestion from "./components/CurrentQuestion";
import Footer from "./components/Footer";

//Ici il yavais quelques problemes avec class-className
const App = (props) => {
    return <> 
        <Navbar/>

        <div className="container pt-5">
            <PageContent />
        </div>
        <div className="pricing__all-features-compared">
            <h1 className="bold">
                Toutes les fonctionnalités comparées
            </h1>
        </div>

        <TableComparison/>
        <CurrentQuestion/>
        <Footer/>
   </>
}

export default App;