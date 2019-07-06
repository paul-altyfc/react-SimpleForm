import React from 'react';
import './companylist.css';
import Company from './Company';

class CompanyList extends React.Component {
  render() {
    const p = this.props;
    return (
      <div className="companylist">
        <span className="companylisttext">Company List</span>

        {p.companyinfoarray.map(companyinfo => (
          <Company key={companyinfo.id} {...companyinfo} />
        ))}
      </div>
    );
  }
}

export default CompanyList;
