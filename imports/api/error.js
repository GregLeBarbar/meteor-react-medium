
import SimpleSchema from 'simpl-schema';

export default SimpleSchema.defineValidationErrorTransform(error => {
  console.log(error);
  const ddpError = new Meteor.Error(error.message);
  ddpError.error = 'validation-error';
  ddpError.details = error.details;
  return ddpError;
});

