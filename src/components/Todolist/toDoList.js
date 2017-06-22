import React, { Component, PropTypes } from 'react';

import './toDoList.css';

class toDoList extends Component {

  state = {
    checked: '',
  }

  gocheck = ({ target: { checked } }) => {
    if (this.state.checked === '') { this.setState({ checked: 'fa fa-check check' }); } else {
      this.setState({ checked: '' });
    }
  };

  render() {
    const { props: { todo, since, fore } } = this;
    const { checked } = this.state;

    return (
      <div className="toDoList">
        <div className="toDoListElem">
          <div className="checkbox" onClick={this.gocheck}>
            <i className={checked} aria-hidden="true" />
          </div>
          <p className="to_do">{todo}</p>
          <p className="since">Since: {since}</p>
          <p className="fore">For: {fore}</p>
        </div>
      </div>
    );
  }
}

toDoList.propTypes = {
  todo: PropTypes.string.isRequired,
  since: PropTypes.string.isRequired,
  fore: PropTypes.string.isRequired,
};

export default toDoList;
