const root = ReactDOM.createRoot(document.getElementById('root'));

const Student = ({name, age}) => {
    //console.log(props);
    // const {name, age} = props; hier erfolgt destrukturierung
    return(
        <>
           <h1>Name: {name}</h1>
           <h3>Age: {age}</h3>
        </>
    )
}

root.render(
    <>
       
        <Student name='Peter' age={30 + 5}/>
        <Student name= 'Mary' age={35 - 6}/>
        <Student name='Boris' age={25}/>
        <Student name='Katy' age={33 * 3}/>
    </>
)