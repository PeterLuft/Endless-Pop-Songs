import React, {Component} from 'react';
import SongItem from './SongItem'
import PropTypes from 'prop-types';

class Timeline extends Component {
    static propTypes = {
        songs: PropTypes.array,
        handlePlay: PropTypes.func
    };

    static defaultProps = {
        songs: []
    };

    render(){
        const songs = this.props.songs.map(s => {
            return(
                <div key={s.id.toString()}>
                    <SongItem song={s} handlePlay={() => this.props.handlePlay(s.id)}/>
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