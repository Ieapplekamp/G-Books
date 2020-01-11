import React from "react";

function SearchComp(props) {
    return (
        <div className="container-fluid">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h4>Book Search:</h4>
                        <form>
                            <div className="form-group">
                                <label className="font-italic">Search Title or Author</label>
                                <input type="text" className="form-control" id="bookInput" name="search" value={props.search} onChange={props.handleInputChange} placeholder="1984"/>
                            </div>
                            <button onClick={props.bookSearch} className="btn btn-primary float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchComp;
