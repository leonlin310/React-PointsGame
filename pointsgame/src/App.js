import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Counter from "./components/Counter";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

//TODO I need a handleIncrement method




  render() {
    return (
      <Wrapper>
        <Counter></Counter>
        <Title>Leon's Hacked Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
