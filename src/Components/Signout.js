import React, {Component} from 'react';

class Signout extends Component {

    handleClick = () => {
        this.props.logoutClicked();
    };


    render() {
        return (
            <button onClick={() => this.handleClick()}>
                <strong>Log out</strong>
            </button>
        )
    }
}

export default Signout;