import React, {Component} from 'react';
import Signin from './Signin';
import Signup from './Signup';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
        layout: {
            width: 'auto',
            display: 'block',
            marginLeft: theme.spacing.unit *3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(600 + theme.spacing.unit * 3)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        },
        paper: {
            marginTop: theme.spacing.unit * 10,
            marginBottom: theme.spacing.unit*10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        },
        submit: {
            display: 'block',
            width: '100%',
            height: '50px',
            marginTop: theme.spacing.unit * 2
        },
        backButton: {
            marginLeft: theme.spacing.unit*2

        }
    })
;

class LoginPage extends Component {

    static propTypes = {
        createAccount: PropTypes.func,
        classes: PropTypes.object.isRequired,
        signUserIn: PropTypes.func,
        error: PropTypes.string,
        loginMode: PropTypes.string,
        setLoginMode: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name) {
        this.props.setLoginMode(name);
    };

    render() {
        const {classes} = this.props;
        let content = '';

        if (this.props.loginMode === 'signup') {
            content = (
                <div>
                    <Signup
                        submitSignup={creds => this.props.createAccount(creds)}
                        backPressed={() => this.handleChange('main')}
                        message={this.props.error}
                    />
                </div>
            );
        }
        else if (this.props.loginMode === 'signin') {
            content = (
                <div>
                    <Signin
                        submitSignin={creds => this.props.signUserIn(creds)}
                        backPressed={() => this.handleChange('main')}
                        message={this.props.error}
                    />
                </div>
            );
        }
        else {
            content = (
                <div>
                    <Button
                        variant="raised"
                        size="large"
                        className={classes.submit}
                        name="signup"
                        color="primary"
                        onClick={() => this.handleChange('signup')}
                    >Get started</Button>
                    <Button
                        size="large"
                        variant="raised"
                        className={classes.submit}
                        name="signin"
                        onClick={() => this.handleChange('signin')}
                    >
                        Log in
                    </Button>
                </div>
            );
        }
        return (
            <div>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Typography variant="display4">Endless pop songs</Typography>
                    <Paper className={classes.paper}>
                        {content}
                    </Paper>
                </main>

            </div>
        )
    }

}

export default withStyles(styles)(LoginPage);