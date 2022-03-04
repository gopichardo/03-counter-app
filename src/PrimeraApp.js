import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//Stateless Functional Components - Antes

//Funtional COmponents - Ahora


const PrimeraApp = ({ saludo = "Hola", subtitulo }) => {

    return (
        <Fragment>
            <h1>{saludo}</h1>
            <h2>{subtitulo}</h2>
            <p>Soy Cesar</p>
        </Fragment>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
};

PrimeraApp.defaultProps = {
    subtitulo: "Subtitulo"
};

export default PrimeraApp;
