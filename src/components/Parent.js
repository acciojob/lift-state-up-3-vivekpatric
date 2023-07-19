import React,{useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";


const Parent =()=>{
        const [selectedOption,setSelectedOption] =useState("");
        const getText=(event)=>{
            setSelectedOption(event.target.innerHTML);
            console.log(event.target.innerHTML);
        }
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child1  getText={getText} />
            <Child2   getText={getText} />
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}
export default Parent