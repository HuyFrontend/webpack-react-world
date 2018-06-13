import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss';
class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        }
    }
    toggle = () => {
        console.log('this.state.on', this.state.on);
        this.setState( 
            ({on}) => ({on: !on}),
            () => {
                this.props.onToggle(this.state.on)
            },
        )
    }
    render() {
        const { on } = this.state;
        return (
            <div className="toggle-elements">
                <p>Toggle me!</p>
                <Switch on={on} onClick={this.toggle} />
            </div>
        );
    }
}
const Switch = ({on = true, ...props}) => {
    console.log('on', on, 'prop', props);
    return (
        <div className="toggle">
            <input className="toggle-input" type="checkbox" />
            <button
                className={`toggle-btn ${on
                    ? 'toggle-btn-on'
                    : 'toggle-btn-off'}`}
                aria-expanded={on}
                {...props}
            />
        </div>
    )
}

Toggle.defaultProps = {
    onToggle: () => {}
};
Switch.propTypes = {
    on: PropTypes.bool
}
Toggle.propTypes = {
    onToggle: PropTypes.func,
}
export default Toggle;