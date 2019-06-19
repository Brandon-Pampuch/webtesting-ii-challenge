import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard"
import Display from './components/Display';

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0
  };

  strikeCount = () => {
    if (this.state.strikes === 2) {
      this.setState({
        ...this.setState,
        strikes: 0
      });
    } else {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    }
  };

  ballCount = () => {
    if (this.state.balls === 3) {
      this.setState({
        ...this.setState,
        balls: 0
      });
    } else {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1
      });
    }
  };
  hitCount = () => {
    this.setState({
      ...this.state,
      balls: 0,
      strikes: 0,
      fouls: 0,
    });
  };
  foulCount = () => {
    if (this.state.strikes < 2) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      });
    }else{
        this.setState({
            ...this.state,
            fouls: this.state.fouls + 1
        })
    }
  };
  render() { 
    return ( 
      <div>
        <Display
         balls={this.state.balls}
         strikes={this.state.strikes}
         fouls={this.state.fouls} />
        <Dashboard
          strikeCount={this.strikeCount}
          ballCount={this.ballCount}
          foulCount={this.foulCount}
          hitCount={this.hitCount}
          />
      </div>
     );
  }
}
 
export default App;


