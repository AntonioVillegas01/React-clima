import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Clima extends Component {

    mostrarResultado = () => {

        //obtener los datos de la consulta usando el object destructuring
        const{name,weather,main} = this.props.resultado


        //si los props estan vacios regresa nulo y se detiene la ejecucion
        if (!name || !weather || !main) return null;

        const kelvin = 273.15

        const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`
        const alt = `clima de ${name}`


        return(
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado Clima de: {name}</h2>
                            <p className="temperatura">
                                Actual:{(main.temp - kelvin).toFixed(2)}&deg;C
                                <img src={urlIcono} alt={alt}/>
                            </p>
                            <p><b>Máxima: </b> {main.temp_max}&deg;C</p>
                            <p><b>Minima: </b> {main.temp_min}&deg;C</p>
                        </span>
                    </div>
                </div>
            </div>
        )

    }


    render() {

        console.log(this.props.resultado)
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        );
    }
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;