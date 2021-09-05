import React from "react";

const useConfirm = (message = "", callback, rejection) => {
    if (!callback || typeof callback !== "function") {
        return;
    }
    if (rejection && typeof rejection !== "function") {
        return;
    }

    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            rejection();
        }
    }
    return confirmAction;
};

const UseConfirmApp = () => {
    const deleteWord = () => console.log("deleting the word...");
    const abort = () => console.log("Aborted.");
    const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

    return(
        <div>
            <button onClick={confirmDelete}>Delete the word</button>
        </div>
    )
};

export default UseConfirmApp;