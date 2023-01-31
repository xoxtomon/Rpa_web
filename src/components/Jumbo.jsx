import React from "react";
import FancyText from '@carefully-coded/react-text-gradient';
import "../index.css";
import "./jumbo.css"
import visuals from "../assets/jumbo.png";

function Jumbo(props) {
    return <container class="container text-center ">

        <div class="jumbotron custdims jumbotron-fluid">
            <div class="container-fluid">
                {/*Dos elementos con igual tamano
                Se puede cambiar a 8 y 4*/}
                <div class="row align-items-center">
                    {/* Elemento IZQ*/}
                    <div class="col-sm-4 pb-5">
                        <img src={visuals} class="img-fluid cstm-animation" alt="Responsive image" />
                    </div>
                    {/* Elemento DER*/}
                    <div class="col-sm-8">
                        {/* Texto de titulo  */}
                        <row class="row align-items-center">
                            <p class="fonts cstm-poppins bold headline white">
                                {/*<FancyText
                                    gradient={{ from: '#112A54', to: '#112A54', type: 'linear' }}
                                    animateTo={{ from: '#EFEFEF', to: '#EFEFEF' }}
                                    animateDuration={5000}
                                >
                                    
            </FancyText>*/}
                                Automatización de calidad
                            </p>
                        </row>
                        {/* Texto de abajo  responsive para que quede en bloque*/}
                        <row class="row align-items-center">

                            <div class="row justify-content-md-center">
                                <div class="col col-lg-2">

                                </div>
                                <div class="col-lg-6 align-items-center">
                                    <p class="text-justify fonts cstm-poppins regular white paragraph">
                                        Somos una empresa joven dedicada a ofrecer soluciones de automatización eficientes y eficaces a nuestros clientes. Nuestra empresa está a la vanguardia del sector y somos capaces de ofrecer los resultados más óptimos para nuestros clientes.
                                    </p>
                                </div>
                                <div class="col col-lg-2">

                                </div>
                            </div>


                        </row>
                    </div>
                </div>
            </div>
        </div>

    </container >
}

export default Jumbo;