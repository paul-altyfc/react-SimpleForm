import React from 'react';
import './company.css';

class Company extends React.Component {
  render() {
    const p = this.props;
    return (
      <div className="company">
        <span className="companytext">Company</span>
        <img src={p.avatar_url} height="42" width="42" />
        <div className="companyinfo">
          <p>Name: {p.name}</p>
          <p>Email: {p.email}</p>
          <p>Bio: {p.bio}</p>
          <p>Repos: {p.public_repos}</p>
        </div>
      </div>
    );
  }
}

export default Company;
