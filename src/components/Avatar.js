import './Avatar.css';
import { Component } from "react";

class Avatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="card-user" key={this.props.id}>
                <div className="card-img">
                   <img src={this.props.picture} alt="avatar"/>
                </div>
                <div className="card-text">
                    <p>Name: {this.props.name}</p>
                    <p>Age: {this.props.age}</p>
                    <p>Email: {this.props.email}</p>
                    <p>Phone: {this.props.phone}</p>
                </div>
            </div>
        )
    }
}

export default Avatar;