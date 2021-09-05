import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    const handleLeaving = (event) => {
        const { clientY } = event;
        if(clientY <= 0) {
           onBefore(); 
        }
    }

    useEffect(() => {
        if (typeof onBefore !== "function") {
            return;
        } else {
        document.addEventListener("mouseleave", handleLeaving);
        return () => document.removeEventListener("mouseleave", handleLeaving);
        }
    }, )
};

const UseBeforeLeaveApp = () => {
    const begForLife = () => console.log("Please don't leave");
    useBeforeLeave(begForLife);

    return (
        <div>
            <h4>Don't leave here.</h4>
        </div>
    )
};

export default UseBeforeLeaveApp;