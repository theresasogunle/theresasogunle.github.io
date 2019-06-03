import React, { Component } from 'react';
import Country from './country'
import Headlines from './headlines'
import Sources from './sources'

class Main extends Component {
  render() {
    return (
      <div className="body">
       
         <Headlines/>
         <Country/>
         <Sources/>
       
      </div>
    );
  }
}

export default Main;