import React from "react";
import API from '../utils/API'

function Card(props) {
  
  async function saveBooks(event){
    console.log(event.target)
    console.log('Clicked on save button')
    let result = await API.saveBooks()
  }

  async function deleteBook(){
    let result = await API.deleteBook()
    console.log('Clicked on delete button')
    console.log(result)
}

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.image} alt="book image" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              <small className="text-muted">Written by {props.authors} </small>
            </p>
            <p className="card-text">{props.description}</p>
          </div>
          <div
            className="btn-group float-right"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <a href={props.view} target="_blank" type="button" className="btn btn-primary">
              View
            </a>
            <button onClick={saveBooks} type="button" className="btn btn-success">
              Save
            </button>
            <button onClick={deleteBook} type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
