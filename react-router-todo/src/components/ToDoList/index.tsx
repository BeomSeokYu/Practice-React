import { useContext } from "react";
import styled from "@emotion/styled";
import { ToDoItem } from "components/ToDoItem";
import { ToDoListContext } from "contexts/ToDoListContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// interface Props {
//     readonly toDoList: ReadonlyArray<string>;
//     readonly onDelete?: (todo: string) => void;
// }

export const ToDoList = () => {
    const { toDoList, onDelete } = useContext(ToDoListContext);

    return (
        <Container>
            {toDoList.map((todo) => (
                <ToDoItem
                    key={todo}
                    label={todo}
                    onDelete={() => {
                        if (typeof onDelete === 'function') onDelete(todo);
                    }}
                />
            ))}
        </Container>
    );
};