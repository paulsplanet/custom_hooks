import React from "react";

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    };
    const fireNotifi = () => {
        if(Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, options)
                } else {
                    return;
                }
            })
        } else {
            new Notification(title, options)
        }
    };
    return fireNotifi;
};

const UseNotificationApp = () => {
    const triggerNotifi = useNotification("Can I have your attention?", {body: "Thank you for your time! HaHa"});

    return (
        <div>
            <button onClick={triggerNotifi}>Click Me!</button>
        </div>
    )
};

export default UseNotificationApp;