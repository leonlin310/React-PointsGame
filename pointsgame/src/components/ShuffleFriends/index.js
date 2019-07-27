import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function ShuffleFriends(arra1) {
    var ctr = arra1.length, temp, index;
  
  // While there are elements in the array
    while (ctr > 0) {
  // Pick a random index
        index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
        ctr--;
  // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  }

export default ShuffleFriends;
