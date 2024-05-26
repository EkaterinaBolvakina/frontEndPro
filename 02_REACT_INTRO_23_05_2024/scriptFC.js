const root = ReactDOM.createRoot(document.getElementById('root'));

function Cohort40() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Hello world</h1>
            <h1 className='text-center'>Hello world</h1>
        </>
    );
}

root.render(
    <>
        <Cohort40 />
        <Cohort40 />
        <Cohort40 />

    </>
)