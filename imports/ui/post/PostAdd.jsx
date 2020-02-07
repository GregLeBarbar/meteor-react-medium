import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Formik, Field, ErrorMessage } from 'formik';
import { CustomInput, CustomTextarea, CustomError } from './CustomFields';

class PostAdd extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      isEdit: this.props.isEdit,
    }
  }

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
    
    let methodName = 'insertPost';
    if (this.state.isEdit) {
      methodName = 'updatePost';
    }

    // Call meteor method to insert new Post
    Meteor.call(methodName, values, (errors, result) => {
      if (errors) {
        console.log(errors);
        let formErrors = {};
        errors.details.forEach(function(error) {
          formErrors[error.name] = error.message;                        
        });
        actions.setErrors(formErrors);
        actions.setSubmitting(false);
      } else {
        if (this.state.isEdit) {
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
        <div className="container my-2">
          <h4 className="py-4">Ajouter un nouvel article</h4>
          <Formik
            onSubmit={ this.handleSubmit }
            initialValues={ this.getPost() }
          >
            { ( {
              handleSubmit,
              isSubmitting,
            } ) => (
              <form className="" onSubmit={ handleSubmit }>
                <Field 
                  label="Titre"
                  name="title" 
                  placeholder="Titre de l'article" 
                  id="title"
                  component={ CustomInput }
                />
                <ErrorMessage name="title" component={ CustomError } />
                
                <Field 
                  label="Contenu"
                  name="content"
                  placeholder="Contenu de l'article"
                  id="content"
                  component={ CustomTextarea }
                />
                <ErrorMessage name="content" component={ CustomError } />
                
                <input className="mt-4 btn btn-primary" type="submit" value="Envoyer" disabled={ isSubmitting } />
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