import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields.js'



class SurveyForm extends React.Component {
  renderFields() {
    return _.map(formFields, field => {
      return <Field key={field.name} label={field.label} type="text" name={field.name} component={SurveyField} />;
    });
  }

  render() {
    return (
      <div>
        SurveyNew!
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>         
          {this.renderFields()}
          <Link to="/surveys">
            <button type="submit" className="teal btn-flat right white-text">
              Cancel
              <i className="material-icons left">cancel</i>
            </button>
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a ' + name;
    }
  });
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
