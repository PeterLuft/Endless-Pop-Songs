import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from "@material-ui/core/Card/Card";

const styles = theme => ({
    layout: {},
    card: {
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 10,
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
    }
});

class LoginSelect extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <Button
                        variant="raised"
                        size="large"
                        className={classes.submit}
                        name="signup"
                        color="primary"
                        onClick={() => this.props.handleChange('signup')}
                    >Get started</Button>
                    <Button
                        size="large"
                        variant="raised"
                        className={classes.submit}
                        name="signin"
                        onClick={() => this.props.handleChange('signin')}
                    >
                        Log in
                    </Button>
                </Card>
            </div>
        );
    }
}

LoginSelect.propTypes = {
    handleChange: PropTypes.func.isRequired
};


export default withStyles(styles)(LoginSelect);