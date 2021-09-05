import React, { useEffect, useRef } from "react";

const useFadeIn = (durantion = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if(typeof durantion !== "number" || typeof delay !== "number") {
            return;
        }
        if(element.current){
            const { current } = element;
            current.style.transition = `opacity ${durantion}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    })

    return { ref: element, style: { opacity: 0 } };
};

const UseFadeInApp = () => {
    const fadeInH4 = useFadeIn(2, 2);
    const fadeInP = useFadeIn(5, 5);

    return (
        <div>
            <h4 {...fadeInH4}>Hello.. Hello..</h4>
            <p {...fadeInP}>lorem ipsum blah blah blah la la la</p>
        </div>
    )

}

export default UseFadeInApp;