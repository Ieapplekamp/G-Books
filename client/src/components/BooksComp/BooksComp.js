import React from "react";

function BooksComponent(props) {
    return (

        <div className="row mt-3 mb-3">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <p className="font-italic">Top Results:</p>

                        {props.books.items ?
                            
                            (<div>

                                {props.books.items.map(book => (
                                    
                                    <div key={book.id}>

                                    {book.volumeInfo.authors &&
                                            
                                        <div className="card">
                                            <div className="card-body">

                                                {props.savedBookId.includes(book.id) ?
                                                    
                                                    (<button type="button" className="btn btn-secondary float-right ml-2" disabled>
                                                        <i className="fas fa-bookmark"></i>
                                                    </button> )

                                                    :

                                                    ( <button type="button" className="btn btn-secondary float-right ml-2" onClick={props.saveBook} data-title={book.volumeInfo.title} data-authors={book.volumeInfo.authors[0]} data-description={book.volumeInfo.description} data-image={book.volumeInfo.imageLinks.thumbnail} data-link={book.volumeInfo.infoLink} data-bookid={book.id}><i className="far fa-bookmark"></i></button> )
                                                }
                                                
                                                <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                                                    <button type="button" className="btn btn-info float-right">View</button>
                                                </a>
                                                <p>
                                                    {book.volumeInfo.title}
                                                </p>
                                                <p>
                                                    Author(s): {book.volumeInfo.authors[0]}
                                                </p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-3 col-12">
                                                        <img src={book.volumeInfo.imageLinks.thumbnail} className="img-fluid" alt={book.volumeInfo.title}></img>
                                                    </div>
                                                    <div className="col-lg-9 col-md-9 col-12">
                                                        <p>{book.volumeInfo.description}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                            
                                    }
                                        
                                    </div>

                                ))} 
                                
                            </div>)

                            :
                            
                            (<h3>No Results</h3>)
                        
                        }
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BooksComponent;