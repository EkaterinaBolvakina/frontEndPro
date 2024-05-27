const root = ReactDOM.createRoot(document.getElementById('root'));

class Student extends React.Component {
    render() {
      // 2. props- Anwendung  
      //  const {name, age} = this.props; // hier erfolgt destrukturierung, aber immer mit this.
        return (
            <>
           <h1>Name: {this.props.name}</h1>
           <h2>Age: {this.props.age}</h2>
            </>
        )
    }
}
root.render(
    <>
       {/* 1. props - Übergabe */}
        <Student name='Peter' age={30 + 5}/>
        <Student name= 'Mary' age={35 - 6}/>
        <Student name='Boris' age={25}/>
        <Student name='Katy' age={33 * 3}/>
    </>
)