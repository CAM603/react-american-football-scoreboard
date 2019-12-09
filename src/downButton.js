import React from "react";

const Down = (props) => {
    
    return (
        <div>
            <button onClick={() => props.changeDown()}>Next Down</button>
        </div>
    )
}

export default Down;