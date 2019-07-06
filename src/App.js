import React from 'react';
import Form from './components/Form';
import CompanyList from './components/CompanyList';

class App extends React.Component {
  state = { companyinfoarray: [] };

  retrieveCompanyInfo = companyinfo => {
    console.log(companyinfo);
  };

  addCompany = companyinfo => {
    this.setState(prevState => ({
      companyinfoarray: [...prevState.companyinfoarray, companyinfo]
    }));
  };

  render() {
    return (
      <div>
        {/* <Form onSubmit={this.retrieveCompanyInfo} />   // shows info for single company*/}
        <Form onSubmit={this.addCompany} />
        <CompanyList companyinfoarray={this.state.companyinfoarray} />
      </div>
    );
  }
}

document.getElementById('root');

export default App;
