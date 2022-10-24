import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Prueba() {
    return (
        <div>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <div style={{ height: 100 }}>
                        {isVisible ? <CountUp end={1000} /> : null}
                    </div>
                )}
            </VisibilitySensor>
        </div>
    );
}

export default Prueba;