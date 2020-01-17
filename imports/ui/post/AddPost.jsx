import React, { Component } from 'react';

export class AddPost extends Component {

  constructor(props){
    super(props);
    
    let action;
    if (this.props.match.path == '/edit-post/:_id') {
      action = 'edit';
    } else {
      action = 'add';
    }

    this.state = {
      action: action,
    }
  }

  getPageTitle = () => {
    let title;
    if (this.state.action === 'edit') {
      title = "Éditer l'article";
    } else { 
      title = "Ajouter un nouvel article";
    }
    return title;
  }

  render() {
    return (
      <div>
        <h4 className="py-4">{ this.getPageTitle() }</h4>
      </div>
    )
  }

}