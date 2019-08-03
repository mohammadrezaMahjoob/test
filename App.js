import React from 'react';
import AppNavigator from './AppNavigator';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      possibleFriends:[
        {name:'Iman'},
        {name:'Mohammad'},
        {name:'Javid2'},
      ],
      currentFriends:[],
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state


    const addedFriend = possibleFriends.splice(index,1)

    currentFriends.push(addedFriend)

    this.setState({
      currentFriends,
      possibleFriends,
    })
  }



  render() {
    return (
        <AppNavigator screenProps = { {
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
          addFriend:this.addFriend,
        } }/>
    );
  }
}
