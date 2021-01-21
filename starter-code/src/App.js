import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import Search from "./components/Search"

//console.log(foods);

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: foods,
      showForm: false,
    };
  }

  showForm() {
    this.setState({ showForm: true });

  }

  addFoodHandler = (theAliment) => {
    const foodCopy = [...this.state.food];
    console.log('Alimento:', theAliment)
    foodCopy.unshift(theAliment)
    this.setState({
      food: foodCopy,
      showForm: false
    })
  }

  renderForm() {
    if (this.state.showForm) {
      return (
        <AddFood addFood={this.addFoodHandler} />
      )
    }
  }

  render() {

    const listOfFood = this.state.food.map((oneFood, index) => {
      return (
        <div key={index}>
          <FoodBox
            name={oneFood.name}
            calories={oneFood.calories}
            image={oneFood.image}
          />
          <br />
        </div>
      )
    })

    return (
      <div>
        <Search />
        {this.renderForm()}
        <button onClick={() => this.showForm()}>Add New Food</button>
        {listOfFood}
      </div>
    );
  }
}

export default App;
