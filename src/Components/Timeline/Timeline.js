import React, {Component} from 'react';
import SongItem from './SongItem'
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    player: {
        width: '40%'
    },
    songs: {
        width: '60%'
    },
    layout: {
        display: 'flex',
        justifyContent: 'space-around'
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
        songs: [],
        activeSong: {}
    };

    render() {

        const {classes} = this.props;
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

        const player = (
            <AudioPlayer
                song={this.props.activeSong}
                isPlaying={this.props.isPlaying}
                handlePlay={() => this.props.handlePlay(this.props.activeSong)}
            />
        );

        return (
            <div className={classes.layout}>

                <div className={classes.songs}>
                    {songs}
                </div>
                <div className={classes.player}>
                    {player}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Timeline);