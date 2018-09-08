import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Person from '@material-ui/icons/Person';
import Signout from './Signout';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    profileIcon: {
        marginLeft: theme.spacing.unit
    },
    menuButton: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4,
        border: '1px solid white'
    },
    menu: {
        marginTop: '55px',
    },
    menuItem: {
        width: '130px'
    }
});

class NavDropdownMenu extends Component {

    state = {
        anchorEl: null
    };

    handleOpen = event => {
        this.setState({
            anchorEl: event.currentTarget
        })
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };


    render() {
        const {classes, logoutClicked} = this.props;
        const {anchorEl} = this.state;

        return (
            <div>
                <Button size='large'
                        className={classes.menuButton}
                        aria-owns={anchorEl ? 'navDropdown' : null}
                        variant="raised" color="primary"
                        onClick={e => this.handleOpen(e)}
                >
                    Peter Luft
                    <Person className={classes.profileIcon}/>
                </Button>
                <Menu
                    id="navDropdown"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => this.handleClose()}
                    className={classes.menu}
                >
                    <MenuItem className={classes.menuItem}>
                        Profile
                    </MenuItem>
                    <MenuItem>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={() => logoutClicked()}>
                        Logout
                    </MenuItem>

                </Menu>
            </div>

        )
    }

};

export default withStyles(styles)(NavDropdownMenu);

