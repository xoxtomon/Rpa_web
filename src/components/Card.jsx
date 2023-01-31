import React from "react";
import rocket from "../assets/rb_logo.png";
import irpa from "../assets/irpa_logo.png";
import po from "../assets/po_logo.png";
import "../index.css";
import "./card.css"

function Card() {

    return (
        <div class="container">
            <div class="row cstm">
                <div class="col"></div>
                <div class="col-10">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <container class="text-center">
                                    <img src={rocket} class="card-img-top cstm" alt="..." />
                                </container>
                                <div class="card-body">
                                    <h5 class="card-title cstm">ROCKETBOT</h5>
                                    <p class="card-text">
                                        Plataforma RPA que permite acelerar la transformación digital de su compañía. Optimice el ROI con licencias de accesibles para permitir la ejecución de procesos paralelos sin pagar extras.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="text-center">
                                    <img src={irpa} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title cstm">SAP IRPA</h5>
                                    <p class="card-text">
                                        SAP IRPA, es una suite de automatización completa, donde los robots de software están diseñados para imitar a los humanos en procesos de negocio definibles y repetibles.  Enfocado principalmente a SAP ERP es una herramienta potente y de fácil adaptación.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="text-center">
                                    <img src={po} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title cstm">POWER AUTOMATE</h5>
                                    <p class="card-text">
                                        Cree y administre flujos de escritorio en Windows, Ejecute y administre flujos de nube sobre la marcha, gestione todos los aspectos de sus automatizaciones desde un portal central, maneje flujos de nube en el centro de conectividad para trabajo en equipo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    )
};

export default Card;