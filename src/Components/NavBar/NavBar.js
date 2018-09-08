import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Signout from './Signout';
import UploadButton from './UploadButton';
import NavDropdownMenu from './NavDropdownMenu';
import ToolBar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import logo from '../../Assets/logo.png';

const styles = theme => ({

    appBar: {
        display: 'flex',
        width: '100%'
    },
    logo: {
        marginTop: 10,
        flexGrow: 1,
        marginBottom: 10
    },
    menuItem: {}
});

const NavBar = (props) => {

    const {classes, uploadClicked, logoutClicked} = props;

    return (
        <AppBar position="fixed">
            <ToolBar>
                <div className={classes.appBar}>
                    <div className={classes.logo}>
                        <img src={logo}/>
                    </div>
                    <div className={classes.menuItem}>
                        <UploadButton
                            uploadClicked={() => uploadClicked()}
                        />
                    </div>

                    <div className={classes.menuItem}>
                        <NavDropdownMenu
                            logoutClicked={() => logoutClicked()}
                        />
                    </div>
                </div>
            </ToolBar>
        </AppBar>
    );
};
export default withStyles(styles)(NavBar);