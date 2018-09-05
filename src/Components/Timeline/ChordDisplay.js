import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    chords: {
        textAlign: 'center',
        border: '1px solid grey'
    },
    progression: {
        marginBottom: theme.spacing.unit*2,
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        width: '80%'
    }

});


class ChordDisplay extends Component {

    static propTypes = {
        chords: PropTypes.array
    };

    static defaultProps = {
        chords: []
    };


    render() {

        const {classes} = this.props;

        const chords = this.props.chords.map((prog, index) => {
                const progression = prog.map((chord, i) =>
                    <Grid item key={i} className={classes.chords} xs={3}>
                        <Typography variant="display1">
                            {chord}
                        </Typography>
                    </Grid>
                );
                return (
                    <Grid container spacing={24} key={index} className={classes.progression}>
                            {progression}
                    </Grid>
                );
            }
        );

        return (
            <div>
                <Typography variant="subheading">
                    Chords:
                </Typography>
                <div className={classes.root}>{chords}</div>
            </div>
        );
    }
}

export default withStyles(styles)(ChordDisplay);