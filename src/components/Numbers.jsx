import React from "react";
import Number from "./Number";

function Numbers(props) {
    return (
        /* TITULO */
        <div class="container text-center">
            <div class="row tit-cstm">
                <div class="col"></div>
                <div class="col-6">
                    <div class="text-center">
                        <h1 class="fonts cstm-sora-md fs-1">
                            {props.title}
                        </h1>
                    </div>
                </div>
                <div class="col"></div>
            </div>

            {/* BODY */}
            <div class="container">
                <div class="row cstm">
                    {/*12.5% IZQUIERDO*/}
                    <div class="col"></div>

                    <div class="col-10">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="number cstm">
                                    <Number end={70} />
                                </div>
                                <div class="card-title cstm fs-5">
                                    Reducción de costos
                                </div>
                            </div>
                            <div class="col">
                                <div class="number cstm">
                                    <Number end={90} />
                                </div>
                                <div class="card-title cstm fs-5">
                                    Reducción de procesos manuales
                                </div>
                            </div>
                            <div class="col">
                                <div class="number cstm">
                                    <Number end={50} />
                                </div>
                                <div class="card-title cstm fs-5">
                                    Aumento de productividad
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*12.5% DERECHO*/}
                    <div class="col"></div>
                </div>
            </div>
        </div>
    );
}

export default Numbers;