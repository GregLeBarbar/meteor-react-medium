import React from 'react';

const CustomInput = ({ field, form, ...props }) => {
  
  // Regarder dans la console de votre navigateur
  // les valeurs des différents paramètres
  // console.log(field, form, props);

  // Par défaut, notre input aura le type 'text'
  // Si on souhaite un autre type (email, button, date, etc)
  // on ajoutera <Field type="email" et il sera pris en compte 
  // grâce à { ...props }

  return (
    <div className="form-group" style={ { marginBottom: "0"} }>
      <label htmlFor={ props.id }>{ props.label }</label>
      <input
        { ...field }
        { ...props }
        type="text"
        className={ form.errors[field.name] ? "is-invalid form-control" : "form-control" }
      />
    </div>
  )
}

const CustomTextarea = ({ field, form, ...props }) => {
  return (
    <div className="form-group" style={ { marginTop: "20px", marginBottom: "0"} }>
      <label htmlFor={ props.id }>{ props.label }</label>
      <textarea
        { ...field }
        { ...props }
        style={{ height: 400 }}
        className={ form.errors[field.name] ? "is-invalid form-control" : "form-control" }
      />
    </div>
  )
}

const CustomError = (props) => {
  // Le props.children contient l'erreur sur le champ
  return (
    <div className="text-danger">{ props.children }</div>
  )
}

export {
  CustomInput,
  CustomTextarea,
  CustomError,
}