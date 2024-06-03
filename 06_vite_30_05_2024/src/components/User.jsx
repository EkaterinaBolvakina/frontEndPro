import { Component } from 'react'

export class User extends Component {

    // eslint-disable-next-line react/prop-types
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/prop-types
            userName: props.userName,
            // eslint-disable-next-line react/prop-types
            companyName: props.companyName,
            // eslint-disable-next-line react/prop-types
            website: props.website,
            // eslint-disable-next-line react/prop-types
            street: props.addressStreet,
            // eslint-disable-next-line react/prop-types
            suite: props.addressSuite,
            // eslint-disable-next-line react/prop-types
            city: props.addressCity,
            // eslint-disable-next-line react/prop-types
            email: props.email
        }
    }
    render() {
        console.log('User component props:', this.props); // Debug log
        return (
            <div className="card" style={{ width: '580px', margin: '8px auto', backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb)' }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ margin: '2px 1px 8px 1px' }}>Company: {this.state.companyName}</h5>
                    <div>{this.state.website}</div>
                    <div  style={{ margin: '20px 1px 8px 1px' }}><h2>{this.state.userName}</h2></div>
                    <div>{this.state.email}</div>
                    <div style={{ margin: '20px 1px 8px 1px' }}>Address:
                        <div>{this.state.city}</div>
                        <div>{this.state.street}, {this.state.suite} </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default User;