import React, {Component} from 'react';
import Signin from './Signin';
import Signup from './Signup';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import BackButton from '@material-ui/icons/ArrowBack';


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
            mode: 'main'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name) {
        this.setState({
            mode: name
        });
    };

    render() {
        const {classes} = this.props;
        let content = '';

        if (this.state.mode === 'signup') {
            content = (
                <div>
                    <Button
                        variant="raised"
                        className={classes.submit}
                        name="main"
                        onClick={() => this.handleChange('main')}
                    >Back</Button>
                    <Signup submitSignup={creds => this.props.createAccount(creds)}/>
                </div>
            );
        }
        else if (this.state.mode === 'signin') {
            content = (
                <div>
                    <Button
                        variant="raised"
                        className={classes.submit}
                        name="main"
                        onClick={() => this.handleChange('main')}
                    >Back</Button>

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
                        onClick={() => this.handleChange('signup')}
                    >Get started</Button>
                    <Button
                        variant="raised"
                        className={classes.submit}
                        name="signin"
                        onClick={() => this.handleChange('signin')}
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