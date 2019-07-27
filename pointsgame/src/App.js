import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import ScoreBody from "./components/ScoreBody"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };


  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };
//TODO I need a handleIncrement method

  render() {
    return (
      <Wrapper>
        {/* ScoreBody will show the score */}
      <ScoreBody
              score={this.state.score}
              handleIncrement={this.handleIncrement}
      />

      
        <Title>Leon's Hacked Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            score={this.state.score}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
