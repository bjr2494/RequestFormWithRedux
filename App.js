import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentDateTime } from './components/dateTime';
import { connect } from 'react-redux';
import * as requestAction from './actions/requestAction';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
          firstName: "",
          lastName: "",
          dateOfRequest: getCurrentDateTime(),
          detailsOfRequest: ""
      }
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit(e) {
      e.preventDefault();
      let newRequest = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          dateOfRequest: this.state.dateOfRequest,
          detailsOfRequest: this.state.detailsOfRequest,
      }
      this.setState({
        firstName: '',
        lastName: '',
        dateOfRequest: getCurrentDateTime(),
        detailsOfRequest: '' 
      })
      
      this.props.createRequest(newRequest);
    }

    listView(data, index) {
      return (
        <div>
          <div>
            <li key={index}>
              First Name: {data.firstName} <br/>
              Last Name: {data.lastName} <br />
              Details of Request: {data.detailsOfRequest} <br />
               Date and Time of Request: {data.dateOfRequest}
            </li>
          </div>
          <div>
            <button onClick={(e) => this.deleteRequest(e, index)}>
              Remove Request
            </button>
            <hr />
          </div>
        </div>
      )
    }

    deleteRequest(e, index) {
      e.preventDefault();
      this.props.deleteRequest(index);
    }

    render() {

      return (
        <div align="center">
          <form onSubmit={this.handleSubmit}>
            <h1>Enter Your Health Request Here</h1>
            <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
            <br />
            <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
            <br />
            <input type="hidden" name="dateOfRequest" onChange={this.handleChange} />
            <textarea type="text" name="detailsOfRequest" placeholder="Details" onChange={this.handleChange} />
            <br />
            <input type="submit" className="btn btn-success" value="ADD" />
            </form>
            { <ol>
              {this.props.requests.map((request, i) => this.listView(request, i))}
              </ol> }
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        requests: state.requests
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      createRequest: request => dispatch(requestAction.createRequest(request)),
      deleteRequest: index => dispatch(requestAction.deleteRequest(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
