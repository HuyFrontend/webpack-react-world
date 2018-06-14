import React, { Component, StrictMode, Fragment } from 'react';
// import PropTypes from 'prop-types';
class ChildrenPass extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.name = 'Huy';
    }
    render() {
        // return React.Children.only(this.props.children);
        // return <input type="text" ref={this.inputRef} />;
        return (
            <Fragment>
                <p>Hello {this.name}!</p>
                <StrictMode>
                    <input type="text" ref={this.inputRef} />
                </StrictMode>
            </Fragment>
        )
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }
}
ChildrenPass.propTypes = {
};
ChildrenPass.defaultProps = {
}
export default ChildrenPass;
