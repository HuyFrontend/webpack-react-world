import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearStories, loadStories, fetchUser } from '../../stores/allActions';

const StoryList = (props) => {
    if (!props.items || props.items.length === 0) {
        return null;
    }
    return (
        <div>
            { props.items.map((item) => {
                return (
                    <Story {...item} key={item.id} />
                )
            })}
        </div>
    )
};

const Story = (props) => {
    return <p>{props.title}</p>
};

class Stories extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('didmount');
        this.props.fetchUser();
    }
    render() {
        return (
            <div className={`col-md-12`}>
                <h2>Story Session</h2>
                <button type="button" onClick={this.props.getStories}>Load Top 3 Stories</button>
                <button type="button" onClick={this.props.clearStories}>Clear</button>
                <StoryList {...this.props.stories} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        stories: state.storiesReducer,
        githubInfo: state.userReducer
    };
};

function mapDispatch(dispatch) {
    return {
        getStories: () => dispatch(loadStories()),
        clearStories: () => dispatch(clearStories()),
        fetchUser: () => {
            return dispatch(fetchUser('huyvoxuan8489'));
        }
    };
}

export default connect(mapStateToProps, mapDispatch)(Stories);