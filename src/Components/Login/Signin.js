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
        alignItems: 'left',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        height: '50px'
    },
    errorMessage: {

    }
});


class Signin extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        submitSignin: PropTypes.func.isRequired
    };

    constructor(props) {
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


    render() {
        const {classes} = this.props;
        let errorMessage;

        if(this.props.message.length > 0 || this.state.message.length > 0){
            errorMessage = (
                <div className={classes.errorMessage}>
                    <Typography color="error" >{this.props.message}</Typography>
                    <Typography>{this.state.message}</Typography>
                </div>
            );
        }
        else{
            errorMessage = '';
        }

        return (
            <div>
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
                <Typography variant="headline">Log in</Typography>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email:</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            autoFocus/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            type="password"
                            name="password"
                            value={this.state.password}
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
                        Log in
                    </Button>
                    {this.state.message.length > 0 ? <span>{this.state.message}</span> : ''}
                </form>
            </div>
        );


    }
}


export default withStyles(styles)(Signin);