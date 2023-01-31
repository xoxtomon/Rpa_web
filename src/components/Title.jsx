import React from "react";
import "./title.css"

function Title(props) {
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
                    <div class="col"></div>
                    <div class="col-10">
                        <p class="lead text-wrap">
                            {props.body}
                        </p>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    );
};

export default Title;