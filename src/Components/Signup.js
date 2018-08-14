import React, {Component} from 'react';

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            pwConf: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit = event => {

        event.preventDefault();

        if (this.state.password !== this.state.pwConf) {
            //passwords don't match
            this.setState({
                message: "Passwords don't match"
            });
        }
        else {
            this.props.submitSignup({
                email: this.state.email,
                password: this.state.password,
                pwConf: this.state.pwConf
            });
        }
    };


    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.state.message.length > 0 ? <span>{this.state.message}</span> : ''}
                    <h2>Create an account </h2>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password}
                               onChange={this.handleChange}/>
                    </label>
                    <label>
                        Confirm password:
                        <input type="password" name="pwConf" value={this.state.pwConf} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }


}

export default Signup;