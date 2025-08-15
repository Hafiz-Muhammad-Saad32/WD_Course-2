import { useState } from "react"

function ToDoApp() {
    let [todolist, settodolist] = useState([])
    let [inputvalue, setinputvalue] = useState("")
    let [editIndex, setEditIndex] = useState(null);

    function readinput(event) {
        let input = event.target.value;
        setinputvalue(input);
    }
    function addtodo() {
        if (!inputvalue.trim()) return alert("required a todo");
        if (editIndex !== null) {
            // Update mode
            let copytodolist = [...todolist];
            copytodolist[editIndex] = inputvalue;
            settodolist(copytodolist);
            setEditIndex(null); // reset to add mode
        } else {
            let copytodolist = [...todolist];
            copytodolist.push(inputvalue);
            settodolist(copytodolist);
        }
        setinputvalue("");
    }
    const dlete = (index) => {
        let copytodolist = [...todolist];
        copytodolist.splice(index, 1);
        settodolist(copytodolist)
    }
    const startUpdate = (index) => {
        setinputvalue(todolist[index]);
        setEditIndex(index);
    };

    return (
        <div className="app">
            <div className="todo-container">
                <h1>✨ My Todo App</h1>
                <div className="input-section">
                    <input type="text" value={inputvalue} placeholder='Enter a task...' onChange={(e) => readinput(e)} />
                    <button onClick={addtodo} className={editIndex !== null ? "btn update" : "btn add"}>{editIndex !== null ? "Update" : "Add"}</button>
                </div>
                <ul className="todo-list">
                    {todolist.length === 0 && (
                        <p className="empty-text">No tasks yet 📝</p>
                    )}
                    {
                        todolist.map((todo, i) => {
                            return (

                                <li key={i} className="todo-item">
                                    <span>{todo}</span>
                                    <div className="btn-group">
                                        <button onClick={() => dlete(i)} className="btn small delete">delete</button>
                                        <button onClick={() => startUpdate(i)} className="btn small update">update</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default ToDoApp;


// import { useState } from "react";


// function ToDoApp() {
//     let [todolist, settodolist] = useState([]);
//     let [inputvalue, setinputvalue] = useState("");
//     let [editIndex, setEditIndex] = useState(null);

//     function readinput(event) {
//         setinputvalue(event.target.value);
//     }

//     function addtodo() {
//         if (!inputvalue.trim()) {
//             return alert("Required a todo");
//         }

//         let copytodolist = [...todolist];

//         if (editIndex !== null) {
//             copytodolist[editIndex] = inputvalue;
//             settodolist(copytodolist);
//             setEditIndex(null);
//         } else {
//             copytodolist.push(inputvalue);
//             settodolist(copytodolist);
//         }

//         setinputvalue("");
//     }

//     const dlete = (index) => {
//         let copytodolist = [...todolist];
//         copytodolist.splice(index, 1);
//         settodolist(copytodolist);

//         if (editIndex === index) {
//             setinputvalue("");
//             setEditIndex(null);
//         }
//     };

//     const startUpdate = (index) => {
//         setinputvalue(todolist[index]);
//         setEditIndex(index);
//     };

//     return (
//         <div className="app">
//             <div className="todo-container">
//                 <h1>✨ My Todo App</h1>

//                 <div className="input-section">
//                     <input
//                         type="text"
//                         value={inputvalue}
//                         placeholder="Enter a task..."
//                         onChange={readinput}
//                     />
//                     <button
//                         onClick={addtodo}
//                         className={editIndex !== null ? "btn update" : "btn add"}
//                     >
//                         {editIndex !== null ? "Update" : "Add"}
//                     </button>
//                 </div>

//                 <ul className="todo-list">
//                     {todolist.length === 0 && (
//                         <p className="empty-text">No tasks yet 📝</p>
//                     )}
//                     {todolist.map((todo, i) => (
//                         <li key={i} className="todo-item">
//                             <span>{todo}</span>
//                             <div className="btn-group">
//                                 <button
//                                     onClick={() => startUpdate(i)}
//                                     className="btn small update"
//                                 >
//                                     Edit
//                                 </button>
//                                 <button
//                                     onClick={() => dlete(i)}
//                                     className="btn small delete"
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default ToDoApp;
