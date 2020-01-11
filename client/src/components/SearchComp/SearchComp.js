import React from "react";

function SearchComp(props) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h4>Book Search:</h4>
                        <form>
                            <div className="form-group row container-fluid">
                                <label className="font-italic col-12">Search Title or Author</label>
                                <input type="text" className=" form-control col-10" id="bookInput" name="search" value={props.search} onChange={props.handleInputChange} placeholder="1984, George Orwell" />
                                <button onClick={props.bookSearch} className="btn btn-outline-dark float-right col-2">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchComp;
