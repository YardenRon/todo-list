import { useState } from "react";
import Task from "../models/Task";
import TodoEdit from "./TodoEdit";
import DeleteIcon from '../assets/delete.svg';
import EditIcon from '../assets/edit.svg';

type TodoItemProps = {
    task: Task;
    onRemove: (id: string) => void;
    onChange: (id: string, title: string, completed: boolean) => void;
};

const TodoItem = ({ task, onRemove, onChange }: TodoItemProps) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onSubmit = (id: string, title: string, completed: boolean) => {
        onChange(id, title, completed);
        setIsEdit(false);
    }

    const onDoubleClick = () => {
        onChange(task.id, task.title, !task.completed);
    }

    if (isEdit) {
        return (
            <li className="todo">
                <TodoEdit task={task} onSubmit={onSubmit} />
            </li>
        );
    }

    return (
        <li className="todo" onDoubleClick={onDoubleClick}>
            <p className={task.completed ? "completed" : ""}>{task.title}</p>
            <div className="actions">
                <button onClick={() => onRemove(task.id)}>
                    <img src={DeleteIcon} title="Delete" />
                </button>
                <button onClick={() => setIsEdit(true)}>
                    <img src={EditIcon} title="Edit" />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;