import React, {useState} from 'react';
import {nanoid} from "nanoid";
import {FiPlusCircle} from "react-icons/fi";
import {TextField, Button} from '@mui/material';

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
<TextField
name="task"
label="What are you up to today?"
type="text"
style = {{
    width: 700,
}}
value={todo.task}
onChange = {handleTaskUpdate}
/>
<Button
style = {{
    height: 60,
}}type="submit">
    <FiPlusCircle size={30}/>
</Button>
</form>
);
}

export default TodoForm;