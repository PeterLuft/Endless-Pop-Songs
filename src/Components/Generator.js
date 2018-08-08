import React, {Component} from 'react';

class Generator extends Component{

    render(){
        return(
            <div>
                <h3>
                    Right here
                </h3>

                <button onClick={() => this.props.generateClicked()}>New song</button>
            </div>
        );
    }
}

export default Generator;