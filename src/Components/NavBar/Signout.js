import React from 'react';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    menuButton: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4,
        border: '1px solid white'
    }
});

const Signout = (props) => {

    const {classes, logoutClicked} = props;

    return (
        <Button size='large'
                className={classes.menuButton}
                variant="raised" color="primary"
                onClick={() => logoutClicked()}
                >
            <strong>Log out</strong>
        </Button>
    )

};
export default withStyles(styles)(Signout);