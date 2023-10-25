import styled from "@emotion/styled";
import { ShowInputButton } from "components/ShowInputButton";
import { ToDoInput } from "components/ToDoInput";
import { useState } from "react";

// interface Props {
//     readonly onAdd: (todo: string) => void;
// }

export const InputContainer = () => {
    const [showToDoInput, setShowToDoInput] = useState(false);

    const onClose = () => {
        // onAdd(todo);
        setShowToDoInput(false);
    };

    return (
        <>
            {showToDoInput && <ToDoInput onClose={onClose} />};
            <ShowInputButton
                show={showToDoInput}
                onClick={() => setShowToDoInput(!showToDoInput)}
            />
        </>
    );
};