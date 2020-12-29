/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// Les imports de react
import React from 'react';
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import PageContent from "./page/PageContent";


// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

const App = () => {
    return <>
        <Navbar/>
        <div className="container pt-5">
            <PageContent/>
        </div>
     </>
}

const rootElement = document.querySelector('#app');
ReactDom.render(<App/>, rootElement);


//javascript
$(document).ready(function () {
    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        if ((e.target.hash) == '#yearly') {
            $('#pricing-tab-switch').prop('checked', 'checked');
        } else {
            $('#pricing-tab-switch').prop('checked', '');
        }
    });

    $('#pricing-tab-switch').on('change', function (e) {
        if ( this.checked ) {
            $('#yearly-tab').tab('show');
        }else {
            $('#monthly-tab').tab('show');
        }
    });
});
