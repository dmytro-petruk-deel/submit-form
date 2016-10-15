import React, {Component} from 'react';

class InputText extends Component {

  render() {
    return (
      <div className="form-item field-type-textfield">
        <label htmlFor="field-user-phone">Fill address by user phone</label>
        <input type="tel" id="field-user-phone" className="form-text" placeholder="+4526332211"/>
      </div>
    )
  }
}

class InputSubmit extends Component {
  render() {
    return (
      <div className="form-actions">
        <input type="submit" className="form-submit" value="Find Information"/>
      </div>
    )
  }
}


class Form extends Component {
  render() {
    return (
      <form className="submit-form">
        <InputText />
        <InputSubmit />
      </form>
    )
  }
}

export default Form;
