import React from "react";

function SavedBooks(props) {
    return (
        <div className="row mb-3">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <p className="font-italic">Saved Books:</p>

                        {props.books.length > 0 ?
                            
                            (<div>

                                {props.books.map(book => (

                                    <div className="card" key={book._id}>
                                        <div className="card-body">
                                            <button type="button" className="btn btn-outline-danger float-right ml-2" onClick={props.deleteBook} data-id={book._id}>
                                                <i className="far fa-trash-alt"></i>
                                            </button>
                                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                                <button type="button" className="btn btn-outline-info float-right">View</button>
                                            </a>
                                            <p>
                                                <span className="font-italic">Title:</span> <span className="h4">{book.title}</span>
                                            </p>
                                            <p>
                                                <span className="font-italic">Author:</span> <span className="font-weight-bold">{book.authors}</span>
                                            </p>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <img src={book.image} className="img-fluid rounded" alt={book.title}></img>
                                                </div>
                                                
                                                <div className="col-lg-7 col-md-7 col-12">
                                                    <p className="font-italic sp">Description:</p>
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
