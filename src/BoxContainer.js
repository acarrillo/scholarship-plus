import React from 'react';
import {Box, images} from './Box';

const INTERVAL_SECONDS = 3.5;

let makeId = num => Math.floor(Math.random() * num);
let makeIdSpread = (numBoxes, numPictures) => {
    return [...Array(numBoxes).keys()].map(()=>makeId(numPictures));
}

class BoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: makeIdSpread(9, images.length)};
    }
    componentDidMount() {
        this.timer = setInterval(
            () => this.spin(),
            INTERVAL_SECONDS * 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    spin() {
        this.setState((prevState, props) => {
            let oldState = JSON.parse(JSON.stringify(prevState.id));
            oldState[makeId(9)] = makeId(images.length);
            return {
                id: oldState
            };
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Box id={this.state.id[0]}/>
                    <Box id={this.state.id[1]}/>
                    <Box id={this.state.id[2]}/>
                </div>
                <div>
                    <Box id={this.state.id[3]}/>
                    <Box id={this.state.id[4]}/>
                    <Box id={this.state.id[5]}/>
                </div>
                <div>
                    <Box id={this.state.id[6]}/>
                    <Box id={this.state.id[7]}/>
                    <Box id={this.state.id[8]}/>
                </div>
            </div>
        );
    }
}

export default BoxContainer;
