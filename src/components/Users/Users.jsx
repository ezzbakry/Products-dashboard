import { Component } from "react";

export default class Users extends Component {
    constructor() {

        super();

        this.state = {
            users: [
                { id: 1, name: "ezz", isadmin: true }, { id: 2, name: "ff", isadmin: false }
            ], isauth: true

        }
        


    }
    handlechange=()=>{
        this.setState({isauth:!this.state.isauth})
    }
    render() {
        return <>
            {/* {this.state.isauth && <ul>

                {this.state.users.map((user) => {
                    if (!user.isadmin) {
                        return <li key={user.id}>{user.name}</li>

                    }


                })}
            </ul>} */}

            {(this.state.isauth) ? <ul>

                {this.state.users.map((user) => {
                    if (!user.isadmin) {
                        return <li key={user.id}>{user.name}</li>

                    }


                })}
            </ul> : <p>you must login first</p>}
            <button className="btn btn-success" onClick={this.handlechange}>toogle</button>
        </>
    }
}
