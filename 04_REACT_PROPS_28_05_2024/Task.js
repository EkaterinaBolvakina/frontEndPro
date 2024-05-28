const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = () => {
    //const isEdit = false;
    const [isEdit, setIsEdit] = React.useState(false); // [isEdit, setIsEdit] Array(2)

    // isEdit = true;    ERROR!!!!!
    //setIsEdit(true); // CORRECT

const [updatedTask, setUpdatedTask] = React.useState('Task 1');    

const textId = React.useRef(); // 1.Step: abstrakte reference definieren und diese kann man einem bestimmten element zuweisen

    const handClickSave = () => {
        setUpdatedTask(textId.current.value);
        setIsEdit(false);
    }

    if (isEdit) {
        return (
            <>
            {/* 2.Step: abstrakte reference dem elemenz textarea zuweisen: */}
                <textarea ref={textId} defaultValue={updatedTask}></textarea>
                <button onClick={handClickSave}>Save</button>

            </>
        )
    } else {
        return (
            <>
                <p>{updatedTask}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button>Delete</button>
            </>
        )
    }
}

root.render(
    <Task  />
)