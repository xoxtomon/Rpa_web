import React from "react";
import CountUp from 'react-countup';

function Number(props) {
    return (
        <div class="card-title cstm">
            <CountUp
                start={0}
                end={props.end}
                delay={7}
                duration={0.75}
                suffix="%"
                enableScrollSpy={true}
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')} />
        </div>
    );
}

export default Number;