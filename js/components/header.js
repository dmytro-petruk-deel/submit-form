import React, {PropTypes, Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="number">{this.props.number}</div>
        <h1 className="main-title">{this.props.title}</h1>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string
};

export default Header;
