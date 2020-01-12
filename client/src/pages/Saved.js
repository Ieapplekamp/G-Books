import React, { Component } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks/SavedBooks.js";
import Nav from "../components/Nav/Nav.js";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";

class Search extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  deleteBook = (event) => {
    event.preventDefault();
    API.deleteBook(event.target.getAttribute('data-id'))
      .then(res => {
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      })
  }

  render() {
    return (
      <div>
        <Nav/>
        <Jumbotron/>
        <div className="container-fluid">
          <SavedBooks
            books = {this.state.books}
            deleteBook = {this.deleteBook}
          />
        </div>
      </div>
    );
  }

}

export default Search;
