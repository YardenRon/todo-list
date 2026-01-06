import React from "react";
import Task from "../models/Task";
import TodoItem from "./TodoItem";

type TodoListProps = {
    tasks: Task[];
    onRemove: (id: string) => void;
    onChange: (id: string, title: string, completed: boolean) => void;
};

const TodoList = ({ tasks, onRemove, onChange }: TodoListProps) => {
    return (
        <ul className="todo-list">
            {tasks.map(task => <TodoItem key={task.id} task={task} onRemove={onRemove} onChange={onChange}/>)}
        </ul>
    );
}

export default TodoList;