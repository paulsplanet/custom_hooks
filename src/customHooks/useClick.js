import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
    const element = useRef();
    
    useEffect(() => {
        const REFERENCE = element.current
        if (typeof onClick !== "function") {
            return;
        } else if (REFERENCE) {
            REFERENCE.addEventListener("click", onClick)
        } 
        
        return () => {
            if (REFERENCE) {
                REFERENCE.removeEventListener("click", onClick)    
            }
        }
    });
    
    return element;
};

const UseClickApp = () => {
    const sayHello = () => console.log("Say Hello!");
    const title = useClick(sayHello);

    return (
        <div>
            <h4 ref={title}>Hi</h4>
        </div>
    )
};

export default UseClickApp;

