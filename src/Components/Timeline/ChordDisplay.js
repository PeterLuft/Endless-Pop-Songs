import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChordDisplay extends Component {

    static propTypes = {
        chords: PropTypes.array
    };

    static defaultProps = {
        chords: []
    };


    render() {
        const chords = this.props.chords.map((prog, index) => {
                const progression = prog.map((chord, i) =>
                    <div key={i}>
                        {chord}
                    </div>
                );
                return(
                    <li key={index}>
                        {progression}
                    </li>
                );
            }
        );

        return (
            <div>
                <p>Chords</p>
                <ul>{chords}</ul>
            </div>
        );
    }
}

export default ChordDisplay;