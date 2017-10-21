import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class BookDetail extends Component {
    render() {
        return (
            <div className='book-detail'>
                <h1>Details:</h1>
                {`title: ${this.props.book ? this.props.book.title : 'No selected book yet. why don\'t you select one !'}`}
                <br />
                {`pages: ${this.props.book ? this.props.book.pages : 0}`}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);

