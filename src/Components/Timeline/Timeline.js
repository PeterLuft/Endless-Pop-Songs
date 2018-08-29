import React, {Component} from 'react';
import SongItem from './SongItem'
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

class Timeline extends Component {
    static propTypes = {
        songs: PropTypes.array,
        isPlaying: PropTypes.bool,
        activeSong: PropTypes.object,
        handlePlay: PropTypes.func
    };

    static defaultProps = {
        songs: []
    };

    render() {
        const songs = this.props.songs.map(s => {
            return (
                <div key={s.id.toString()}>
                    <SongItem
                        song={s}
                        isPlaying={this.props.isPlaying && this.props.activeSong.id === s.id}
                        handlePlay={() => {
                            this.props.handlePlay(s);
                        }}
                    />
                </div>
            );
        });

        if(!isNaN(parseFloat(this.props.activeSong.id))){
            return(
                <div>
                    <div>
                        <AudioPlayer song={this.props.activeSong} isPlaying={this.props.isPlaying} handlePlay={() => this.props.handlePlay(this.props.activeSong)}/>
                    </div>
                    <div>
                        {songs}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div>
                        {songs}
                    </div>
                </div>
            )
        }



    }
}

export default Timeline;