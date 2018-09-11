import React, {Component} from 'react';
import Signin from './Signin';
import Signup from './Signup';
import LoginSelect from './LoginSelect';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
        layout: {
            width: 'auto',
            display: 'block',
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(600 + theme.spacing.unit * 3)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        },
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

    state = {
        mode: 'main'
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name) {
        this.setState({
            mode: name
        });
    };

    render() {
        const {classes} = this.props;
        const {mode} = this.state;
        let content = '';

        return (
            <div>
                <CssBaseline/>
                <main className={classes.layout}>
                    {/*<Typography variant="display4">Endless pop songs</Typography>*/}
                    {/*{content}*/}
                    <Slide direction="left" in={mode === 'signup'} mountOnEnter unmountOnExit>
                        {mode === 'signup' ? (
                            <Signup
                                submitSignup={creds => this.props.createAccount(creds)}
                                backPressed={() => this.handleChange('main')}
                                message={this.props.error}
                            />
                        ) : <div></div>}
                    </Slide>
                    <Slide direction="left" in={mode === 'signin'} mountOnEnter unmountOnExit>
                        {mode === 'signin' ? (
                            <Signin
                                submitSignin={creds => this.props.signUserIn(creds)}
                                backPressed={() => this.handleChange('main')}
                                message={this.props.error}
                            />) : <div></div>}
                    </Slide>
                    <Slide direction="right" in={mode === 'main'} mountOnEnter unmountOnExit>
                        {mode === 'main' ? (
                                <LoginSelect handleChange={name => this.handleChange(name)}/>
                            )
                            : <div></div>}
                    </Slide>

                </main>

            </div>
        )
    }

}

export default withStyles(styles)(LoginPage);