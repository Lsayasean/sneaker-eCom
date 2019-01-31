import React, { Component } from "react";
import "./home.css";

class Home extends Component {
    enter(){
        this.props.history.push('/gallery')
    }

  render() {
    return (
      <div className="home-container">
        <h3 className='title'>Custom | Design </h3>
        <button 
        onClick={() => this.enter()}
        className="home-title">Enter SneakerHeads</button>
      </div>
    );
  }
}

export default Home;
