import React , { Component } from 'react';
import { connect } from 'react-redux';

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
    selectCateGory = (catName) => {
        console.log('category name', catName);
    }
    render() {
        const categories = ['javascript', 'react', 'angular', 'nodejs'];

        return (
            <div className="book-container">
                <ButtonElememt categories={categories} selectCateGory={(e) => this.selectCateGory(e)}/>
                <div className="item">
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        bookList: '' //state.bookList
    };
};

export default connect(mapStateToProps)(ReduxBookList);
