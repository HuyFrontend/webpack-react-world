import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clear, loadStories } from '../../stores/allActions';

// export function Stories(props) {
//     console.log('Stories', props);
//     return (
//         <div>
//             <button type="button" onClick={props.loadStories}>Load Top 3 Stories</button>
//             <button type="button" onClick={props.clear}>Clear</button>
//             <StoryList {...props} />
//         </div>
//     )
// }

const StoryList = (props) => {
    console.log('Story List', props);

    if (!props.items || props.items.length === 0) return null;
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
    console.log('Story', props);
    return <p>{props.title}</p>
};

class Stories extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.loadStories}>Load Top 3 Stories</button>
                <button type="button" onClick={this.props.clear}>Clear</button>
                <StoryList {...this.props.stories} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        stories: state.storiesReducer,
    };
};

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

export default connect(mapStateToProps, mapDispatch)(Stories);