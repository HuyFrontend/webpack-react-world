import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectCatrgory, selectSub } from '../../stores/allReducers';
const ButtonElememt = ({categories, selectCateGory}) => {
    const listItems = categories.map((item, i) =>
        <button key= {i} className={`item ${item}`} onClick={() => selectCateGory(item)}>{item.toUpperCase()}</button>
    );
    return (
        <ul>{listItems}</ul>
    );
};

class ReduxBookList extends Component {
    constructor(props) {
        super(props);
    }
    selectCateName = (catName) => {
        this.props.dispatch(selectCatrgory(catName));
        // selectCatrgory(catName);
    }
    render() {
        const categories = ['javascript', 'react', 'angular', 'nodejs'];

        return (
            <div className="book-container">
                <ButtonElememt categories={categories} selectCateGory={(e) => this.selectCateName(e)}/>
                <div className="item">
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state listByCategory', state);
    return {
        bookList: state.listByCategory
    };
};

export default connect(mapStateToProps)(ReduxBookList);
