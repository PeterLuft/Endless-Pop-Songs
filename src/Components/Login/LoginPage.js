import React, {Component} from 'react';
import Signin from './Signin';
import Signup from './Signup';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
        layout: {
            width: 'auto',
            display: 'block',
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(400 + theme.spacing.unit * 3)]: {
                width: 400,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        },
        paper: {
            marginTop: theme.spacing.unit * 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        },
        submit: {
            display: 'block',
            width: 'auto',
            marginTop: theme.spacing.unit * 3
        }
    })
;

class LoginPage extends Component {

    static propTypes = {
        createAccount: PropTypes.func,
        classes: PropTypes.object.isRequired,
        signUserIn: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            signup: false,
            signin: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        const name = event.target.name;
        console.log(name);
        // if(name === 'signup'){
        //     console.log("SIGNUP");
        // }
        // else if(name === 'signin'){
        //     console.log('SIGNIN');
        // }
    };

    render() {
        const {classes} = this.props;
        let content = '';

        if (this.state.signup) {
            content = (
                <div>
                    <Signup submitSignup={creds => this.props.createAccount(creds)}/>
                </div>
            );
        }
        else if (this.state.signin) {
            content = (
                <div>
                    <Signin submitSignin={creds => this.props.signUserIn(creds)}/>
                </div>
            );
        }
        else {
            content = (
                <div>
                    <Button
                        variant="raised"
                        className={classes.submit}
                        name="signup"
                        color="primary"
                        onClick={this.handleChange}
                    >Get started</Button>
                    <Button
                        variant="raised"
                        className={classes.submit}
                        name="signin"
                        onClick={this.handleChange}
                    >
                        Sign in
                    </Button>
                </div>
            );
        }
        return (
            <div>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        {content}
                    </Paper>
                </main>

            </div>
        )
    }

}

export default withStyles(styles)(LoginPage);