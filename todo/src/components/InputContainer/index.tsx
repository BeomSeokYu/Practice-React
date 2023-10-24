import styled from "@emotion/styled";
import { ShowInputButton } from "components/ShowInputButton";
import { ToDoInput } from "components/ToDoInput";
import { useState } from "react";

interface Props {
    readonly onAdd: (todo: string) => void;
}

export const InputContainer = ({ onAdd }: Props) => {
    const [showToDoInput, setShowToDoInput] = useState(false);

    const onAddToDo = (todo: string) => {
        onAdd(todo);
        setShowToDoInput(false);
    };

    return (
        <>
            {showToDoInput && <ToDoInput onAdd={onAddToDo} />};
            <ShowInputButton
                show={showToDoInput}
                onClick={() => setShowToDoInput(!showToDoInput)}
            />
        </>
    );
};