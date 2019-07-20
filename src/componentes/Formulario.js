import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Formulario extends Component {

    //primero crear los refs
    ciuadadRef = React.createRef()
    paisRef = React.createRef()


    buscarClima = (e) => {
        e.preventDefault()

        // Segundo leer los refs y crear el objeto
        const respuesta = {
            ciudad : this.ciuadadRef.current.value,
            pais : this.paisRef.current.value
        }
       // console.log(respuesta)


        //Enviar por props
        this.props.datosConsulta(respuesta)



        //Resetear el form



    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciuadadRef} id="ciudad" type="text"/>
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defaultValue>Elige un País</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">México</option>
                                    <option value="PE">Perú</option>
                                </select>
                                <label htmlFor="pais">País:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 buscador">
                                <input type="submit" className="waves-effect waves-light btn btn-large yellow accent-4"
                                       value="BUSCAR..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    datosConsulta: PropTypes.func.isRequired
}


export default Formulario;