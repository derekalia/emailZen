import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields.js';
import _ from 'lodash';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h3>Please confirm your shit</h3>

      <button onClick={onCancel}>Cancel</button>

      <div>{reviewFields}</div>
      <button  onClick={()=>submitSurvey(formValues,history)} className="green btn-flat right">send survey</button>
    </div>
  );
};

function mapShitToProps(state) {
  console.log(state.form.surveyForm);
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapShitToProps, actions)(withRouter(SurveyReview));
