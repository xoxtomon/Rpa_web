import React from "react";
import erp from "../assets/erpB.png";
import sales from "../assets/statsB.png";
import finance from "../assets/economyB.png"
import hr from "../assets/human-resourcesB.png";
import logistics from "../assets/logisticsB.png";
import doc from "../assets/documentB.png";


function Areas() {
    return (
        <div class="container">
            <div class="row cstm">
                <div class="col"></div>
                <div class="col-10">
                    {/* PRIMERA FILA */}
                    <div class="row row-cols-2 row-cols-md-3 g-4">
                        <div class="col">
                            {/* h-100 */}
                            <div class="card border-0 cstm h-100">
                                <div class="text-center">
                                    <img src={erp} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title cstm fs-4">ERP</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            {/* h-100 */}
                            <div class="card border-0 cstm h-100">
                                <div class="text-center">
                                    <img src={sales} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title cstm fs-4">Ventas</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            {/* h-100 */}
                            <div class="card border-0 cstm h-100">
                                <div class="text-center">
                                    <img src={finance} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title cstm fs-4">Finanzas</h5>
                                </div>
                            </div>
                        </div>
                        {/* SEGUNDA FILA */}
                        <div class="col">
                            {/* h-100 */}
                            <div class="card border-0 cstm h-100">
                                <div class="text-center">
                                    <img src={logistics} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title cstm fs-4">Logística</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            {/* h-100 */}
                            <div class="card border-0 cstm h-100">
                                <div class="text-center">
                                    <img src={doc} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title cstm fs-4">Documentacion</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            {/* h-100 */}
                            <div class="card border-0 cstm h-100">
                                <div class="text-center">
                                    <img src={hr} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title cstm fs-4">Recursos Humanos</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    );
};

export default Areas;