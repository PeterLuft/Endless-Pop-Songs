import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    menuButton: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit*3,
        marginBottom: theme.spacing.unit*3,
        border: '1px solid white'
    }
});

class Signout extends Component {

    static propTypes = {
        logoutClicked: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired
    };

    handleClick = () => {
        this.props.logoutClicked();
    };

    render() {

        const {classes} = this.props;

        return (
            <Button size='large' className={classes.menuButton} variant="raised" color="primary" onClick={() => this.handleClick()}>
                <strong>Log out</strong>
            </Button>
        )
    }
}

export default withStyles(styles)(Signout);