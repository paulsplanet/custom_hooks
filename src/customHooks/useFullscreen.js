import React, { useRef } from "react";

const useFullscreen = () => {
    const element = useRef();
    const triggerFull = () =>{
        if (element.current) {
            element.current.requestFullscreen();
        }
    }
    const exitFull = () => {
        document.exitFullscreen();
    }
    return { element, triggerFull, exitFull }
};

const UseFullscreenApp = () => {
    const { element, triggerFull, exitFull } = useFullscreen();

    return (
        <div>
            <img 
                ref={element}
                src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" 
                alt="a flower" 
            />
            <button onClick={triggerFull}>Make FullScreen</button>
        </div>
    )
};

export default UseFullscreenApp; 

