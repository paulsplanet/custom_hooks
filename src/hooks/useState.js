import React, { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </>
    )
}

export default Count;