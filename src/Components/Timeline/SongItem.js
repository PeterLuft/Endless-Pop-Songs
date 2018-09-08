import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    card: {
        padding: theme.spacing.unit,
        margin: theme.spacing.unit*3
    },
    header: {
        display: 'flex'
    },
    title: {
        marginLeft: 10
    },
    actions: {},
    details: {},
    avatar: {
        width: 60,
        height: 60,
        backgroundColor: theme.palette.primary.main
    }

});


class SongItem extends Component {

    static propTypes = {
        song: PropTypes.object,
        handlePlay: PropTypes.func,
        handleFavorite: PropTypes.func,
        handleShare: PropTypes.func,
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

    generateLetter = () => {
        return String.fromCharCode(Math.floor(Math.random() *26) + 65)
    };

    render() {

        const {classes} = this.props;

        return (
            <Card className={classes.card}>
                <CardContent className={classes.header}>
                    <Avatar className={classes.avatar}>
                        {this.generateLetter()}
                        </Avatar>
                    <Typography className={classes.title} variant="headline">{this.props.song.title}</Typography>

                </CardContent>

                <CardContent className={classes.details}>
                    <Typography variant="subheading">Tempo: {this.props.song.tempo}</Typography>
                    <Typography variant="subheading">Key: {this.props.song.key}</Typography>
                </CardContent>

                <Divider/>

                <CardActions className={classes.actions}>
                    <IconButton onClick={() => this.props.handlePlay()}>
                        {this.props.isPlaying ? (
                            <PauseIcon/>
                        ) : (
                            <PlayIcon/>
                        )}
                    </IconButton>
                    <IconButton onClick={() => this.props.handleFavorite()}>
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton onClick={() => this.props.handleShare()}>
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(SongItem);

