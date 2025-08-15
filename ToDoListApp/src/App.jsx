import { useState } from "react";

function ToDoApp() {
    let [todolist, settodolist] = useState([]);
    let [inputvalue, setinputvalue] = useState("");
    let [editIndex, setEditIndex] = useState(null); // track which todo is being edited

    function readinput(event) {
        setinputvalue(event.target.value);
    }

    function addtodo() {
        if (!inputvalue.trim()) {
            alert("Please enter a todo!");
            return;
        }
        if (editIndex !== null) {
            // Update mode
            let copytodolist = [...todolist];
            copytodolist[editIndex] = inputvalue;
            settodolist(copytodolist);
            setEditIndex(null); // reset to add mode
        } else {
            // Add mode
            settodolist([...todolist, inputvalue]);
        }

        setinputvalue(""); // clear input
    }

    const dlete = (index) => {
        let copytodolist = [...todolist];
        copytodolist.splice(index, 1);
        settodolist(copytodolist);

        // agar delete ke time pe wahi edit ho raha tha, to reset kar do
        if (editIndex === index) {
            setinputvalue("");
            setEditIndex(null);
        }
    };

    const startUpdate = (index) => {
        setinputvalue(todolist[index]); // selected todo ka text input me daal do
        setEditIndex(index); // track kaunsa edit ho raha hai
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Input a todo"
                value={inputvalue}
                onChange={readinput}
            />
            <button onClick={addtodo}>
                {editIndex !== null ? "Update" : "Add"}
            </button>

            <h1>Todo</h1>
            <ul>
                {todolist.map((todo, i) => (
                    <li key={i}>
                        {todo}
                        <button onClick={() => dlete(i)}>Delete</button>
                        <button onClick={() => startUpdate(i)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoApp;
