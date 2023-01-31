import React from "react";
import CountUp from 'react-countup';
import "./number.css"

function Number(props) {
    return (
        <div class="card-title cstm">
            <CountUp
                end={props.end}
                duration={0.75}
                suffix="%"
                />
        </div>
    );
}

export default Number;