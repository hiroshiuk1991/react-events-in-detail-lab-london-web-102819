// Code DelayedButton Component Here
import React from 'react';
import CoordinatesButton from './CoordinatesButton';

class DelayedButton extends React.Component {
    handleClick = event => {
        event.persist();
        window.setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }


    render() {
        return (
            <button onClick={this.handleClick}>Delay</button>
        )
    }


}

export default DelayedButton; 