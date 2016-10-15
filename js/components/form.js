import React, {Component} from 'react';

class InputText extends Component {
  render() {
    return (
      <div className="form-item field-type-textfield">
        <label htmlFor="field-user-phone">Fill address by user phone</label>
        <input type="tel" id="field-user-phone" className="form-text" placeholder="+4526332211"
               value={this.props.value}/>
      </div>
    )
  }
}

class InputSubmit extends Component {
  render() {
    return (
      <div className="form-actions">
        <input type="submit" className="form-submit" value="Find Information" onClick={this.props.onClick}/>
      </div>
    )
  }
}

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleSubmit(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="submit-form">
        <InputText/>
        <InputSubmit onClick={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}

export default Form;
