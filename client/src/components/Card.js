import React from "react";
import API from '../utils/API'

function Card(props) {
  
  async function saveBooks(){
    console.log('Clicked on save button')
    let result = await API.saveBooks(props)
    console.log('[saveBooks.card]', result)
  }

  async function deleteBook(){
    console.log('Clicked on delete button')
    console.log('Item id: ', props.id)
    let result = await API.deleteBook(props.id)
    window.location.reload()
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
            <a href={props.link} target="_blank" type="button" className="btn btn-primary">
              View
            </a>
            <button disabled={!saveBooks} onClick={saveBooks} value={props} type="button" className="btn btn-success">
              Save
            </button>
            <button disabled={!deleteBook} onClick={deleteBook} value={props} type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
