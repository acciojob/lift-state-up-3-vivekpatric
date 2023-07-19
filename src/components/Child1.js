import React from "react";

const Child1=(props)=>{

    return(
        <div className="child-1">
            <h2>Child Component 1</h2>
            <button onClick={props.getText}>Option 1</button>
        </div>
    )
}
export default Child1;