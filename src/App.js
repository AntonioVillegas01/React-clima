import React, {Component} from 'react';
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Error from "./componentes/Error";
import Clima from "./componentes/Clima";

class App extends Component {

    state = {
        error : '',
        consulta : {},
        resultado: {}
    }

    componentDidUpdate(prevProps, prevState) {
        //si el estado previo no es igual entonces realiza la consulta
        if(prevState.consulta !== this.state.consulta){
            this.consultarApi()
        }
    }


    componentDidMount() {
        this.setState({
            error : false
        })
    }

    consultarApi = () => {
        const {ciudad, pais}  = this.state.consulta
        if(!ciudad || !pais) return null


        //leer url y agregar el api key
        const appID = 'ad1b46c2965d473fa62b4a7029ef7e48'
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
        //console.log(url)


        //query con fetch api
        fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(datos =>{
               // console.log(datos)
                this.setState({
                    resultado: datos
                })
            })
            .catch((error =>{
                console.log(error)
            }))

    }

    datosConsulta = (respuesta) => {
        if(respuesta.ciudad === '' || respuesta.pais === '' ){
            this.setState({
                error:true
            })
        }else{
            this.setState({
                consulta : respuesta,
                error: false
            })
        }

    }

    render() {

        const error = this.state.error

        let resultado;
        if (error){
            resultado = <Error mensaje="Ambos campos son obligatorios"/>
        }else{

            resultado = <Clima resultado={this.state.resultado}/>
        }



        return (
            <div className="app">
                <Header
                    titulo='Clima React'
                />
                <Formulario
                    datosConsulta={this.datosConsulta}
                />
                {resultado}
            </div>
        );
    }
}

export default App;
