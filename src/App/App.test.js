import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

describe('app tests', () => {

    const generateFunction = jest.fn();

    it('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<App generateSong={() => generateFunction()}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


})


