import React, {Component} from 'react';
import Signin from './Signin';
import Signup from './Signup';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';



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
            marginTop: theme.spacing.unit * 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        },
        submit: {
            display: 'block',
            width: '100%',
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
                    <Signup submitSignup={creds => this.props.createAccount(creds)} backPressed={() => this.handleChange('main')}/>
                </div>
            );
        }
        else if (this.state.mode === 'signin') {
            content = (
                <div>
                    <Signin submitSignin={creds => this.props.signUserIn(creds)} backPressed={() => this.handleChange('main')}/>
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
                        Log in
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