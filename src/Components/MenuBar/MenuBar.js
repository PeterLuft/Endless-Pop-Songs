import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Signout from './Signout';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import logo from '../../Assets/logo.png';

const styles = theme => ({
    appBar: {
        height: 100
    },
    signOut: {
        marginLeft: '100px'
    }
});

class MenuBar extends Component {
    static propTypes = {
        logoutClicked: PropTypes.func,
        classes: PropTypes.object.isRequired
    }

    render() {

        const {classes} = this.props;
        return (
            <AppBar className={classes.appBar} position="static">
                <ToolBar>
                    <Grid container spacing={24}>
                        <Grid item xs={10}>
                            <img src={logo}/>
                        </Grid>
                        <Grid item xs={2}>
                            <Signout
                                className={classes.signOut}
                                logoutClicked={() => this.props.logoutClicked()}
                            />
                        </Grid>
                    </Grid>
                </ToolBar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(MenuBar);