import React, {useState} from 'react';
import {nanoid} from "nanoid";

function TodoForm ({addTodo}) {
const [todo, setTodo] = useState({
id: "", task: "",
completed: false
});

function handleTaskUpdate (e) {
setTodo ({...todo, task: e.target.value});
}

function handleSubmit (e) {
    e.preventDefault();
    if (todo.task.trim()){
        addTodo({...todo, id: nanoid()});
        setTodo({...todo, task:""});
    }
}

return (
<form onSubmit={handleSubmit}>
<input
name="task"
type="text"
value={todo.task}
onChange = {handleTaskUpdate}
/>
<button type="submit">Enter</button>
</form>
);
}

export default TodoForm;