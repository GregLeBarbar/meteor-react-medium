import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Formik } from 'formik';

class PostAdd extends Component {

  getPost() {
    let initialValues;
    if (this.props.isEdit) {
      initialValues = this.props.post;
    } else {
      initialValues = { title: '', content: '' };
    };
    return initialValues;
  }

  handleSubmit = (values, actions) => {

    console.log(actions);

    // Call meteor method to insert new Post
    Meteor.call("insertPost", values, (errors, result) => {
      if (errors) {
        console.log(errors);
        let formErrors = {};
        errors.details.forEach(function(error) {
          formErrors[error.name] = error.message;                        
        });
        actions.setErrors(formErrors);
        actions.setSubmitting(false);
      } else {
        if (this.props.isEdit) {
          actions.setSubmitting(false);
        } else {
          actions.resetForm();
        }
      }   
    });
  }

  render() {
    let content;
    if (this.props.loading) {
      content = <h1>Loading...</h1>
    } else {
      content = (
        <div className="container">
          <h4 className="py-4">Ajouter un nouvel article</h4>
          <Formik
            onSubmit={ this.handleSubmit }
            initialValues={ this.getPost() }
          >
            { ( {
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              isSubmitting,
              errors,
            } ) => (
              <form className="new-task" onSubmit={ handleSubmit }>
                <div className="form-group">
                  <label htmlFor="title">Titre</label>
                  <input
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.title }
                    name="title"
                    id="title"
                    className="form-control"
                    type="text"
                    placeholder="Titre de l'article"
                  />
                  { errors.title ? (
                    <div className="text-danger">{ errors.title }</div>
                  ) : null }
                </div>

                <div className="form-group">
                  <label htmlFor="content">Contenu</label>
                  <textarea 
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.content }
                    name="content"
                    id="content"
                    className="form-control"
                    placeholder="Contenu de l'article"
                    style={ { height: 400 }  }
                  />
                  { errors.content ? (
                    <div className="text-danger">{ errors.content }</div>
                  ) : null }
                  <input className="mt-4  btn btn-primary" type="submit" value="Envoyer" disabled={ isSubmitting } />
                </div>
              </form>
            ) }
          </Formik>
        </div>
      )
    }
    return content;
  }
}
export default withTracker((props) => {
  if (props.match.path === "/edit-post/:_id") {
    Meteor.subscribe('postById', props.match.params._id);
    let posts = Posts.find({_id: props.match.params._id}).fetch(); 
    return {
      loading: posts.length == 0,
      post: posts[0],
      isEdit: true,
    }
  } else {
    return {
      loading: false,
    }
  }
})(PostAdd);