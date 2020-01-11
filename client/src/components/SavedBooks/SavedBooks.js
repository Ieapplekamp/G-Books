import React from "react";

function SavedBooks(props) {
    return (
        <div className="row mt-3 mb-3">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <p>Saved Books:</p>

                        {props.books.length > 0 ?
                            
                            (<div>

                                {props.books.map(book => (

                                    <div className="card" key={book._id}>
                                        <div className="card-body">
                                            <button type="button" className="btn btn-outline-danger float-right ml-2" onClick={props.deleteBook} data-id={book._id}><i className="far fa-trash-alt"></i></button>
                                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                                <button type="button" className="btn btn-outline-info float-right">View</button>
                                            </a>
                                            <p className="font-weight-bold">{book.title}</p>
                                            <p>Author: {book.authors}</p>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-12" >
                                                    <img src={book.image} className="img-fluid rounded" alt={book.title}></img>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-12" >
                                                    <p>{book.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>)

                            :

                            (<div className="card">
                                <div className="card-body">
                                    <p>You haven't saved any books yet</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedBooks;
