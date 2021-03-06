import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import '../App.css';

class UserForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      enabled: true,
    };

    
  }

  handleSearchChange = (e) => {
    const value = e.target.value;

    if (value != '') { 
      this.setState({enabled : false});
    } else {
      this.setState({enabled : true});
    }
  };  

  render() {
    return (
      <form onSubmit={this.props.getFeed}>
        <Input
          style={{margin: "20px auto", display: "flex" }}
          type="text"
          name="feed_url"
          onChange={this.handleSearchChange}
        />
        <Button className="button-class" type="submit" variant="contained" color="primary" disabled={this.state.enabled}>
          Submit
        </Button>
      </form>
    );  
};
};

export default UserForm;
