import React from 'react';
import './Form.css';
import { async } from 'q';
import axios from 'axios';

class Form extends React.Component {
  state = { companyName: 'Microsoft' };

  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.companyName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ companyName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span className="formtext">Form</span>
        <input
          type="text"
          value={this.state.companyName}
          onChange={event => this.setState({ companyName: event.target.value })}
          placeholder="Enter Company Name"
          required
        />
        <button>Go!</button>
      </form>
    );
  }
}

export default Form;
