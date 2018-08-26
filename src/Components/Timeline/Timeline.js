import React, {Component} from 'react';
import Player from './Player'
import PropTypes from 'prop-types';

class Timeline extends Component {
    static propTypes = {
        songs: PropTypes.array
    };

    static defaultProps = {
        songs: []
    };

    render(){
        const songs = this.props.songs.map(s => {
            return(
                <div key={s.id.toString()}>
                    <Player song={s}/>
                </div>
            );
        });

        return(
            <div>
                {songs}
            </div>
        )


    }
}

export default Timeline;