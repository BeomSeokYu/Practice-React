import styled from "@emotion/styled";
import { ShowInputButton } from "components/ShowInputButton";
import { ToDoInput } from "components/pages/ToDoInput";
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
            {showToDoInput && <ToDoInput />};
            <ShowInputButton
                show={showToDoInput}
                onClick={() => setShowToDoInput(!showToDoInput)}
            />
        </>
    );
};