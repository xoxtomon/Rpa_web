import React from "react";
import Robot from "./Robot";
import "../index.css";
import visuals from "../assets/visual2.png";

function Jumbo(props) {
    return <container class="container text-center ">

        <div class="jumbotron custdims jumbotron-fluid ">
            <div class="container-fluid">
                {/*Dos elementos con igual tamano
                Se puede cambiar a 8 y 4*/}
                <div class="row align-items-center">
                    {/* Elemento IZQ*/}
                    <div class="col-sm-6">
                        {/*<div class="robot">
                            <Robot />
                        </div>*/}
                        <div >
                            <img src={visuals} class="img-fluid" />
                        </div>
                    </div>
                    {/* Elemento DER*/}
                    <div class="col-sm-6">
                        <h1 class="fonts cstm-oswald text-nowrap">+ BENEFICIO</h1>
                        <h1 class="fonts cstm-oswald text-nowrap">- COSTO</h1>
                        <p class="fs-4 lead">
                            <strong class="text-bold cstm-jumbo-bold">Ahorre tiempo, aumente la rentabilidad, elimine errores, participe del crecimiento de su compañía.</strong> Estos y algunos otros beneficios son lo que puede obtener implementado RPA para la automatización de sus procesos de negocio.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </container>
}

export default Jumbo;