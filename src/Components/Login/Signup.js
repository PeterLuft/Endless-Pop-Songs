import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import BackButton from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';


const styles = theme => ({
    backButton: {
        marginLeft: '0px',
        marginRight: 'auto'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        height: '50px'
    },
    errorMessage: {},
    card: {
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
});

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

        const {classes} = this.props;
        let errorMessage;

        if (this.props.message.length > 0 || this.state.message.length > 0) {
            errorMessage = (
                <div className={classes.errorMessage}>
                    <Typography color="error">{this.props.message}</Typography>
                    <Typography>{this.state.message}</Typography>
                </div>
            )
        }
        else {
            errorMessage = '';
        }

        return (
            <div>
                <Card className={classes.card}>
                    <CssBaseline/>
                    <IconButton
                        variant="raised"
                        className={classes.backButton}
                        name="main"
                        onClick={() => this.props.backPressed()}
                    >
                        <BackButton/>
                    </IconButton>
                    {errorMessage}
                    <Typography variant="headline">Sign Up</Typography>
                    <form onSubmit={this.handleSubmit} className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email:</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                autoFocus
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password:</InputLabel>
                            <Input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="pwConf">Confirm Password:</InputLabel>
                            <Input
                                type="password"
                                name="pwConf"
                                value={this.state.pwConf}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            value="submit"
                            fullWidth
                            variant="raised"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign up
                        </Button>
                    </form>
                </Card>
            </div>
        );
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    backPressed: PropTypes.func,
    submitSignup: PropTypes.func,
    message: PropTypes.string
}

export default withStyles(styles)(Signup);