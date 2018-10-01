import React from 'react';
import {Box, images} from './Box';

const INTERVAL_SECONDS = 10;

let makeId = num => Math.floor(Math.random() * num);
let makeIdSpread = (numBoxes, numPictures) => {
    return [...Array(numBoxes).keys()].map(()=>makeId(numPictures));
}

class BoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: makeIdSpread(9, images.length),
            text: [...Array(9).keys()].map(()=> { return null; }),
            lastTextId: null
        };

        let eventSource = new EventSource("/api/fetch");
        eventSource.onmessage = (tweet) => {
            let data = JSON.parse(tweet.data);
            this.setState((prevState, props) => {
                let oldState = JSON.parse(JSON.stringify(prevState.text));
                const luckyId = makeId(9);
                oldState[prevState.lastTextId] = null;
                oldState[luckyId] = data.text;
                return {
                    text: oldState,
                    lastTextId: luckyId
                };
            });
        }
        eventSource.onerror = (error) => {
            console.log(error);
        }
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
                    <Box id={this.state.id[0]} text={this.state.text[0]}/>
                    <Box id={this.state.id[1]} text={this.state.text[1]}/>
                    <Box id={this.state.id[2]} text={this.state.text[2]}/>
                </div>
                <div>
                    <Box id={this.state.id[3]} text={this.state.text[3]}/>
                    <Box id={this.state.id[4]} text={this.state.text[4]}/>
                    <Box id={this.state.id[5]} text={this.state.text[5]}/>
                </div>
                <div>
                    <Box id={this.state.id[6]} text={this.state.text[6]}/>
                    <Box id={this.state.id[7]} text={this.state.text[7]}/>
                    <Box id={this.state.id[8]} text={this.state.text[8]}/>
                </div>
            </div>
        );
    }
}

export default BoxContainer;
