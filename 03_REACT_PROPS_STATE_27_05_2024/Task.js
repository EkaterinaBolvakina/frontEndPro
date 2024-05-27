const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = () => {
    //const isEdit = false;
    const [isEdit, setIsEdit] = React.useState(false); // [isEdit, setIsEdit] Array(2)

    // isEdit = true;    ERROR!!!!!
    //setIsEdit(true); // CORRECT

    if (isEdit) {
        return (
            <>
                <textarea defaultValue='Name'></textarea>
                <button onClick={() => setIsEdit(false)}>Save</button>

            </>
        )
    } else {
        return (
            <>
                <p>Name</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button>Delete</button>
            </>
        )
    }
}

root.render(
    <Task  />
)