import React, {Component} from 'react';
import ChordDisplay from './ChordDisplay';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2
    }
});


class SongItem extends Component {

    static propTypes = {
        song: PropTypes.object,
        handlePlay: PropTypes.func,
        isPlaying: PropTypes.bool
    };

    static defaultProps = {
        song: {
            id: 0,
            title: 'Song title',
            tempo: 0,
            key: 'A',
            chords: []
        }
    };


    render() {

        const {classes} = this.props;

        return (
            <div className="SongItem">
                <Paper className={classes.paper}>
                    <Typography variant="title">{this.props.song.title}</Typography>
                    <Typography variant="subheading">Tempo: {this.props.song.tempo}</Typography>
                    <Typography variant="subheading">Key: {this.props.song.key}</Typography>
                    <ChordDisplay chords={this.props.song.chords}/>
                    <IconButton onClick={() => this.props.handlePlay()}>
                        <div>
                            {this.props.isPlaying ? (
                                <PauseIcon/>
                            ) : (
                                <PlayIcon/>
                            )}
                        </div>
                    </IconButton>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(SongItem);

