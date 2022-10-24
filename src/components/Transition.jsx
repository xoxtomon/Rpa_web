import React from "react";

function Transition(props) {
    const colToW = props.bol;

    if (colToW) {
        return <div>
            <img src={require("../assets/colToW.png")} class="img-fluid custdims cTw" />
        </div>
    } else {
        return <div>
            <img src={require("../assets/wTocol.png")} class="img-fluid custdims wTc" />
        </div>
    };


}

export default Transition;