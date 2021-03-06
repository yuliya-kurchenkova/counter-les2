import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }
    //  антипаттерн
    // static getDerivedStateFromProps(props, state) {
    //     console.log(props);
    //     state.cnt = Math.min(Math.max(state.cnt, props.min), this.props.max);
    //     state.inputValue = state.cnt;
    //     return state;
    // }

    state = {
        cnt: this.props.min,
        inputValue: this.props.min
    };

    increase = () => {
        this.set(this.state.cnt + 1)
    }
    decrease = () => {
        this.set(this.state.cnt - 1)
    }
    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({
            cnt,
            inputValue: cnt
        });
    }

    setValue(newStr){
        this.setState({inputValue: newStr})
    }

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt)
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13) {
            this.applyValue();
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue}
                       onChange={(e) => this.setValue(e.target.value)}
                       onBlur={this.applyValue}
                       onKeyUp={this.checkEnterKey}
                />
                <br/>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

