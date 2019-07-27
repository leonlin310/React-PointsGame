import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import ScoreBody from "./components/ScoreBody"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


//TODO: code found via stackoverflow to shuffle a passed in array
let shuffle = function(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

shuffle(friends);


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };

  

  
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
    //Set friends to shuffle everytime handleIncrement is 'clicked'
    this.setState({friends: shuffle(this.state.friends)})
  };

  

  //TODO set up a method to shuffleFriends

  render() {

    return (
    
      <Wrapper>
        {/* ScoreBody will show the score */}
      <ScoreBody
              score={this.state.score}
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

