import { Component } from 'react'
import User from './User';

interface IUserListJSON {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

type UserListState = {
    users: IUserListJSON[];
    isLoading: boolean;
  };

// rce = React class export
export class UserList extends Component {
    constructor(props: UserListState) {
        super(props);
        this.state = {
            users: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ ...this.state, isLoading: true })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data, isLoading: false })
            })
    }

    render() {
        const { users, isLoading } = this.state as UserListState;
        /*
                if (isLoading) {
                    return <div> Loading... </div>;
                }
                return (
                    <div>
                        {users.map((user) => (
                            <p key={user.id}>
                                {user.name}
                            </p>
                        ))}
                    </div>
                )
            }
            */

        return isLoading ? (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ) : (
            <div>
                {users.map((user: IUserListJSON) => (
                    <User
                       key={user.id}
                       person={user} 
                    />
                ))}
            </div>
        );
    }
}

export default UserList
