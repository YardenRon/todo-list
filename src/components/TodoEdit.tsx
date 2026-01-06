import { useState } from "react";
import CheckIcon from '../assets/check.svg';
import Task from "../models/Task";

type TodoEditProps = {
    task: Task;
    onSubmit: (id: string, title: string, completed: boolean) => void;
};

const TodoEdit = ({ task, onSubmit }: TodoEditProps) => {
    const [title, setTitle] = useState<string>('');

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit(task.id, title, task.completed);
    };

    return (
        <form className="todo-edit">
            <input
                id="title"
                type="text"
                name="title"
                defaultValue={task.title}
                onChange={onInputChange}
            />
            <button type="submit" onClick={handleSubmit}>
                <img src={CheckIcon} title="Save" />
            </button>
        </form>
    );
};

export default TodoEdit;