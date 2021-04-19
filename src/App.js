import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBox from './Components/FoodBox';

class App extends React.Component {
  state = {
    foodList: [],
    searchList: [...foods],
    originalList: [...foods],
    totalCalories: 0,
    search: '',
  };

  handleClick = (foodName, foodCalories, foodQuantity) => {
    const addedItem = {
      name: foodName,
      quantity: foodQuantity,
      calories: foodCalories * foodQuantity,
    };

    //Para futura resolução do bonus
    // if (this.state.foodList.find((item)=> {
    //   return item.name===addedItem.name
    // })) {
    // }

    this.setState({
      foodList: [...this.state.foodList, addedItem],
      totalCalories: this.state.totalCalories + addedItem.calories,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevState);
    if (prevState.search !== this.state.search) {
      const filteredArray = this.state.originalList.filter((food) =>
        food.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
      this.setState({ searchList: filteredArray });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input
            type="text"
            className="input search-bar"
            name="search"
            placeholder="Search"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </div>
        <div className="columns">
          <div className="column">
            {this.state.searchList.map((food) => {
              return (
                <FoodBox
                  name={food.name}
                  image={food.image}
                  calories={food.calories}
                  key={food.name}
                  onClick={this.handleClick}
                />
              );
            })}
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {this.state.foodList.map((food) => {
                return (
                  <li key={food.name}>
                    {food.quantity} {food.name} = {food.calories} cal
                  </li>
                );
              })}
            </ul>
            <strong>Total: {this.state.totalCalories} cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
