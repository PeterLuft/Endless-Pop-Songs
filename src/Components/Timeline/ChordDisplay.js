import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    chords: {
        display: 'inline',
        marginRight: theme.spacing.unit * 6
    },
    progression: {
        listStyle: 'none',
        marginBottom: theme.spacing.unit
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
                    <div key={i} className={classes.chords}>
                        <Typography variant="body2"  style={{display: 'inline-block'}}>
                            {chord}
                        </Typography>
                    </div>
                );
                return (
                    <li key={index} className={classes.progression}>
                        <div>
                            {progression}
                        </div>
                    </li>
                );
            }
        );

        return (
            <div>
                <Typography variant="subheading">
                    Chords:
                </Typography>
                <ul>{chords}</ul>
            </div>
        );
    }
}

export default withStyles(styles)(ChordDisplay);