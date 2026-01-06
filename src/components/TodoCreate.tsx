import { useState } from "react";

type TodoCreateProps = {
    onCreate: (title: string) => void;
};

const TodoCreate = ({onCreate}: TodoCreateProps) => {
    const [title, setTitle] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return (
        <form className="todo-create" onSubmit={onSubmit}>
            <input 
                id="title" 
                type="text" 
                name="title" 
                placeholder="Enter a new task" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
};

export default TodoCreate;