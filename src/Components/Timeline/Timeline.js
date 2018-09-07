import React, {Component} from 'react';
import SongItem from './SongItem'
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Signout from '../Signout';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    appBar: {
        height: 100
    },
    player: {},
    songs: {},
    layout: {
        marginRight: '10%',
        marginLeft:  '10%'
    },
    signOut: {
        marginLeft: '100px'
    }
});

class Timeline extends Component {

    static propTypes = {
        songs: PropTypes.array,
        isPlaying: PropTypes.bool,
        activeSong: PropTypes.object,
        handlePlay: PropTypes.func,
        handleFavorite: PropTypes.func,
        handleShare: PropTypes.func
    };

    static defaultProps = {
        songs: []
    };

    render() {

        const {classes} = this.props;
        let player;

        const songs = this.props.songs.map(s => {
            return (
                <div key={s.id.toString()}>
                    <SongItem
                        song={s}
                        isPlaying={this.props.isPlaying && this.props.activeSong.id === s.id}
                        handlePlay={() => this.props.handlePlay(s)}
                        handleFavorite={() => this.props.handleFavorite(s)}
                        handleShare={() => this.props.handleShare(s)}
                    />
                </div>
            );
        });

        if (!isNaN(parseFloat(this.props.activeSong.id))) {
            player = (
                <AudioPlayer
                    song={this.props.activeSong}
                    isPlaying={this.props.isPlaying}
                    handlePlay={() => this.props.handlePlay(this.props.activeSong)}
                />
            )
        }
        else {
            player = ''
        }

        return (
            <div>
                <main className={classes.layout}>
                <AppBar className={classes.appBar} position="static">
                    <ToolBar >
                        <Grid container spacing={24}>
                            <Grid item xs={10}>
                                <Typography variant='display3'>Endless Pop Songs</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Signout className={classes.signOut} logoutClicked={() => this.props.logoutClicked()}/>
                            </Grid>
                        </Grid>
                    </ToolBar>
                </AppBar>

                <div className={classes.player}>
                    {player}
                </div>
                <div className={classes.songs}>
                    {songs}
                </div>
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(Timeline);