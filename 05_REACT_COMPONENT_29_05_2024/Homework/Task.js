const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = ({ title, toDelete }) => {

    const [isEdit, setIsEdit] = React.useState(false); // [isEdit, setIsEdit] Array(2)

    const [updatedTask, setUpdatedTask] = React.useState(title);

    const textId = React.useRef(); // 1.Step: abstrakte reference definieren und diese kann man einem bestimmten element zuweisen

    const handClickSave = () => {
        setUpdatedTask(textId.current.value);
        setIsEdit(false);
    }

    if (isEdit) {
        return (
            <>
                {/* 2.Step: abstrakte reference dem element textarea zuweisen: */}
                <textarea ref={textId} defaultValue={updatedTask}></textarea>
                <button onClick={handClickSave}>Save</button>

            </>
        )
    } else {
        return (
            <>
                <p>{updatedTask}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button onClick={toDelete}>Delete</button>
            </>
        )
    }
}

const TaskList = () => {
    const [tasks, setTasks] = React.useState([
        { id: Math.random() * 1000, title: 'Task 1' },
        { id: Math.random() * 1000, title: 'Task 2' },
        { id: Math.random() * 1000, title: 'Task 3' },
        { id: Math.random() * 1000, title: 'Task 4' },
        { id: Math.random() * 1000, title: 'Task 5' },
        { id: Math.random() * 1000, title: 'Task 6' }
    ]);

    const deleteTask = (taskIdToDelete) => {
        setTasks((currentTasks) => currentTasks.filter(task => task.id !== taskIdToDelete))
    }
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    title={task.title}
                    toDelete={() => deleteTask(task.id)}
                />
            ))}
        </>
    )
}

root.render(
    <TaskList />
)
