import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Signout from './Signout';
import UploadButton from './UploadButton';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
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
    menuItem: {
    }
});

const MenuBar = (props) => {

    const {classes, uploadClicked, logoutClicked} = props;

    return (
        <AppBar position="static">
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
                        <Signout
                            logoutClicked={() => logoutClicked()}
                        />
                    </div>
                </div>
            </ToolBar>
        </AppBar>
    );
};
export default withStyles(styles)(MenuBar);