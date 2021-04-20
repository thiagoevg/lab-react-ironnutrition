import React from 'react';

class FoodBox extends React.Component {
  state = { quantity: 1 };

  handleChange = (event) => {
    if (event.target.value > 0) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  onChange={this.handleChange}
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() =>
                    this.props.onClick(
                      this.props.name,
                      this.props.calories,
                      this.state.quantity
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
