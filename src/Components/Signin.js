import React, {Component} from 'react';

class Signin extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {

        event.preventDefault();

        this.props.submitSignin({
            email: this.state.email,
            password: this.state.password
        });
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    };


    render(){


        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.state.message.length > 0 ? <span>{this.state.message}</span>: ''}
                    <h2>Login</h2>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />

                </form>
            </div>
        );


    }
}

export default Signin;