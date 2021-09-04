import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
    const [ title, setTitle ] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
}

const UseTitleApp = () => {
    const titileUpdater = useTitle("Loading...");
    setTimeout(() => titileUpdater("Home"), 3000);
    return (
        <div>
            <div>Look at the Title</div>
        </div>
    )
}

export default UseTitleApp;