import React from "react";
import rocket from "../assets/rb_logo.png";
import irpa from "../assets/irpa_logo.png";
import po from "../assets/po_logo.png";
import "../index.css";

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
                                    <h5 class="card-title">ROCKETBOT</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="text-center">
                                    <img src={irpa} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">SAP IRPA</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="text-center">
                                    <img src={po} class="card-img-top cstm" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">POWER AUTOMATE</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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