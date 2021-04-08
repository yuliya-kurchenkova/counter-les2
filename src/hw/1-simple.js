import React from 'react';

export default class extends React.Component{
    // this.props

    state = {
        cnt: this.props.min
    };

    increase = () => {
        let cnt = this.state.cnt + 1;

        if(cnt > this.props.max) {
            cnt = this.props.max
        }

        this.setState({cnt});
    }
    decrease = () => {
        let cnt = this.state.cnt - 1;

        if(cnt < this.props.min) {
            cnt = this.props.min
        }

        this.setState({cnt});
    }

    render(){
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <strong>{this.state.cnt}</strong>
                <br/>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}