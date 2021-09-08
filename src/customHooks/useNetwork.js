import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine)
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    });

    return status;
};

const UseNetworkApp = () => {
    const handleNetworkChange = (online) => {
        console.log(online? "We jsut went online" : "We are offline");
    }
    const onLine = useNetwork(handleNetworkChange);

    return (
        <div>
            <h4>{onLine ? "Online" : "Offline"}</h4>
        </div>
    )
};

export default UseNetworkApp;