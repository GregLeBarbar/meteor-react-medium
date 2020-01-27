import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PostAdd extends Component {

  displayError(refInput, refError, elementById, msg) {

    // Add class input field
    ReactDOM.findDOMNode(refInput).className = 'is-invalid form-control';
    
    // Add msg error
    let errorContent = React.createElement("span", {}, msg);
    ReactDOM.render(errorContent, document.getElementById(elementById));
    ReactDOM.findDOMNode(refError).className = 'text-danger my-2';
  }

  handleSubmit = (event) => {
    event.preventDefault();
 
    // Find the fields via the React ref
    const title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
    const content = ReactDOM.findDOMNode(this.refs.contentTextarea).value.trim();
    
    const newPost = {
      title,
      content
    }

    // Call meteor method to insert new Post
    Meteor.call("insertPost", newPost, (errors, result) => {
      if (errors) {
        console.log(errors);
        errors.details.forEach(
          error => {
            if (error.name == "title") {
              this.displayError(
                this.refs.titleInput, 
                this.refs.errorTitle, 
                'errorTitle',
                error.message
              );
            } else if (error.name == "content") {
              this.displayError(
                this.refs.contentTextarea, 
                this.refs.errorContent,
                'errorContent',
                error.message
              );
            }
          }
        )
      } else {
        // Clear form
        ReactDOM.findDOMNode(this.refs.titleInput).value = '';
        ReactDOM.findDOMNode(this.refs.contentTextarea).value = '';
      }   
    });
  }

  render() {
    
    return (
      <div className="container">
        <h4 className="py-4">Ajouter un nouvel article</h4>
        <form className="new-task" onSubmit={ this.handleSubmit } >
          <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input
              id="title"
              className="form-control"
              type="text"
              ref="titleInput"
              placeholder="Titre de l'article"
            />
            <div id="errorTitle" ref="errorTitle"></div>
          </div>
          <div className="form-group">
            <label htmlFor="content">Contenu</label>
            <textarea 
              id="content"
              className="form-control"
              ref="contentTextarea"
              placeholder="Contenu de l'article"
            />
            <div id="errorContent" ref="errorContent"></div>
            <input className="mt-4  btn btn-primary" type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    )
  }
}