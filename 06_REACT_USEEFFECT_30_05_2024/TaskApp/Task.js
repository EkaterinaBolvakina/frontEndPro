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
                <div className="card" style={{ width: '580px', margin: '8px auto' }}>
                    <div className="card-body">
                        <textarea className="card-title" style={{ width: '480px', margin: '2px 1px 8px 1px' }} ref={textId} defaultValue={updatedTask}></textarea>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <button type="button" class="btn btn-secondary" data-bs-toggle="button" aria-pressed="true" onClick={handClickSave}>Save</button>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="card" style={{ width: '580px', margin: '8px auto', backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb)' }}>
                <div className="card-body">
                    <h4 className="card-title" style={{ margin: '2px 1px 8px 1px' }}>{updatedTask}</h4>
                    <div style={{ margin: '28px 1px 1px 1px' }} className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="button" class="btn btn-secondary" data-bs-toggle="button" aria-pressed="true" onClick={() => setIsEdit(true)}>Edit</button>
                        <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true" onClick={toDelete}>Delete</button>
                    </div>
                </div>
            </div>
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

    const [newTask, setNewTask] = React.useState({ id: Math.random() * 1000, title: '' });

    const deleteTask = (taskIdToDelete) => {
        setTasks((currentTasks) => currentTasks.filter(task => task.id !== taskIdToDelete))
    }

    const addTask = () => {
        if (newTask.title.trim()) {
            const tasksCopy = [...tasks];
            tasksCopy.push(newTask);
            setTasks(tasksCopy);
            setNewTask({ id: Math.random() * 1000, title: '' });
        }
    }
    return (
        <>
            <nav class="navbar bg-body-tertiary" style={{ height: '120px' }}>
                <div class="container-fluid">
                    <h1 className='navbar-brand'>Todo List App</h1>
                    <div className="d-flex">
                        <input className="form-control me-2" style={{ width: '780px' }}
                            value={newTask.title}
                            onChange={(e) => setNewTask({ id: newTask.id, title: e.target.value })}
                            placeholder='Enter new task'
                        />
                        <div style={{ margin: '0px 500px 0px 0px' }}>
                            <button className="btn btn-outline-success" style={{ width: '180px', padding: '15px' }} onClick={addTask}>Add Task</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='d-flex flex-column align-items-center text-center' >
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        toDelete={() => deleteTask(task.id)}
                    />
                ))}
            </div>
        </>
    )
}

root.render(
    <TaskList />
)
