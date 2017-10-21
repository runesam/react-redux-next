import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions';

class BooksList extends Component {
  renderList() {
    return this.props.books.map(book => <button key={book.title} onClick={this.props.selectBook.bind(this, book)} className='list-group-item'>{book.title}</button>);
  }
  render() {
    return (
      <div className='list-group'>
        {this.renderList()}
      </div>
    );
  }
}

// a function to get the data comming from the assigned reducer and map it as props
function mapStateToProps(state) {
    return { books: state.books };
}
// a function to get the actions comming from the assigned action and map it as props
function mapDispatchesToProps(dispatch) {
    return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchesToProps)(BooksList);
