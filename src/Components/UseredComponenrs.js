import React, { useRef } from 'react'

export default function UseredComponenrs() {
    const inputref = useRef();
    const h1ref = useRef("");
    const clikHandler = () =>{
        // console.log(inputref);
        inputref.current.style.color = "yellow"
        inputref.current.style.backgroundColor = "green";
        inputref.current.value = "Vrajesh";
        h1ref.current.style.color = "green";
    }
    return (
        <div>
            <input ref={inputref} type="text" />
            <h1 ref={h1ref}>Hello..</h1>
            <button onClick={clikHandler}>Clike me</button>
        </div>
    )
} 

