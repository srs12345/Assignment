import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Navbar';
import Home from './Home'
import './App.css';





class App extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
      inputValue: "sdhfg",
      count: 0
    }
  }

  handle() {
    this.setState({
      show: !this.state.show
    })
  }

  handleInput(event) {
    console.log(event)
    this.setState({
      inputValue: event.target.value
    })
  }

  handleCount(count) {
    this.setState({
      count: count
    })
  }

  render () {
    // const name = "Aman";
    return (
      // <div className="App">
      //   <Nav count={this.state.count}/>
      //   <h1 onClick={() => this.handle()}>Hiii {name}</h1>
      //   <form>
      //     <input onChange={(event) => this.handleInput(event)} type="text" value={this.state.inputValue}/>
      //   </form>
      //   <Home countChange={(count) => this.handleCount(count)}/>
      // </div>

      <h2>Hello</h2>
    );
  }
}







export default App;