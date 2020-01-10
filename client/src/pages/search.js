import React, { Component } from "react";
import SearchCard from "../components/SearchCard"
import BookCards from "../components/BookCards";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

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
          search = "Many Lives Many Masters";
        };
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&key=AIzaSyCqwaY-3wWYY4jadfbnn8bv2zPEjZA2Moo`)
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
            <Navbar
              search = "active"
            />
            <Jumbotron/>
            <div className="container">
              <SearchCard 
                search = {this.state.search}
                handleInputChange = {this.handleInputChange}
                bookSearch = {this.bookSearch}
              />
              <BookCards
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