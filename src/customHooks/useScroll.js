import React, { useEffect, useState } from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0,
    });
    const onScroll = event => {
        setState({
            x: window.scrollX,
            y: window.scrollY,
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })
    return state;
};

const UseScrollApp = () => {
    const { y } = useScroll();

    return (
        <div style={{ height: "50vh", backgroundColor: "grey", position: "relative" }}>
            <h4 style={{ position: "absolute", top: "50px", color: y > 50 ? "red" : "blue"}}>useScroll</h4>
        </div>
    )
}

export default UseScrollApp;