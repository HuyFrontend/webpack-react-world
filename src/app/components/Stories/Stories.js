import React from 'react';
import { connect } from 'react-redux';
import { clear, loadStories } from '../../stores/allActions';

export function Stories(props) {
    console.log('Stories', props);
    return (
        <div>
            <button type="button" onClick={props.loadStories}>Load Top 3 Stories</button>
            <button type="button" onClick={props.clear}>Clear</button>
            <StoryList {...props} />
        </div>
    )
}

function StoryList(props) {
    console.log('Story List', props);
    if (!props.items || props.items.length === 0) return null;
    return (
        <div>
            {props.items.map(item => <Story {...item} key={item.id} />)}
        </div>
    )
}

function Story(props) {
    console.log('Story', props);
    return <p>{props.title}</p>
}

function mapState(state) {
    console.log('State', state);
    return state;
}

function mapDispatch(dispatch) {
    console.log('Dispatch', dispatch);
    return {
        loadStories: () => dispatch(loadStories()),
        clear: () => dispatch(clear())
    };
}

export default connect(mapState, mapDispatch)(Stories);