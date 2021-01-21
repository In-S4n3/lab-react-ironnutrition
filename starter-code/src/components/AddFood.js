import React, { Component } from 'react';

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      numberOfCalories: "",
      image: ""
     }
  }

  handleNameInput = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleNumberOfCalories = event => {
    this.setState({
      numberOfCalories: event.target.value
    });
  };

  handleImageInput = event => {
    this.state({
      image: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: "",
      numberOfCalories: "",
      image: ""
    });
  };

  render() { 
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleNameInput(e)}
          />

          <label>Number of Calories:</label>
          <input
            type="number"
            name="director"
            value={this.state.director}
            onChange={e => this.handleNumberOfCalories(e)}
          />

          <label>Image:</label>
          <input
            type="file"
            name="image"
            value={this.state.image}
            placeholder="https://i.imgur.com/5ktcSzF.jpg"
            onChange={e => this.handleImageInput(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 
export default AddFood;