import React, { Component } from "react";
import SearchComp from "../components/SearchComp/SearchComp.js"
import BookComponent from "../components/BooksComp/BooksComp.js";
import API from "../utils/API.js";
import Nav from "../components/Nav/Nav.js";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";

class Search extends Component {
    state = {
        books: [],
        savedBookId: [],
        search:''
    };

    componentDidMount() {
        API.getBooks()
        .then(res => {
            let id = [];
            res.data.forEach(book => id.push(book.bookID))
            this.setState({ savedBookId: id });
          })
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    bookSearch = (event) => {
        event.preventDefault();
        let search;
        if(this.state.search) {
          search = this.state.search;
        } else {
          search = "1984";
        };
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + search + '&printType=books&key=AIzaSyD9mokEf1Rs_8FOlao5lUSNLNcnZc7keYQ')
        .then(res => res.json())
        .then(
          (result) => {
            if(result.items) {
              this.setState({books: result})
            } else {
              this.setState({books: []})
            }
          },
          (error) => {
            console.log(error);
          }
        )
    }
    
    saveBook = event => {
        event.preventDefault();
        let bookID = event.target.getAttribute('data-bookid');
        if (true) {
          API.saveBook({
            title: event.target.getAttribute('data-title'),
            authors: event.target.getAttribute('data-authors'),
            description: event.target.getAttribute('data-description'),
            image: event.target.getAttribute('data-image'),
            link: event.target.getAttribute('data-link'),
            bookID: event.target.getAttribute('data-bookid')
          })
            .then(res => {
              let temp = this.state.savedBookId.concat(bookID);
              this.setState({ savedBookId: temp })
            })
            .catch(err => console.log(err));
        }
    };
    
    render() {
        return (
          <div>
            <Nav
              search = "active"
            />
            <Jumbotron/>
            <div className="container">
              <SearchComp 
                search = {this.state.search}
                handleInputChange = {this.handleInputChange}
                bookSearch = {this.bookSearch}
              />
              <BookComponent
                books = {this.state.books}
                saveBook = {this.saveBook}
                savedBookId = {this.state.savedBookId}
              />
            </div>
          </div>
        );
      }
    
}

export default Search;