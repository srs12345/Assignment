import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    const name = "Aman";
    return (
      <div className="App">
        <Navbar count={this.state.count}/>
        <h1 onClick={() => this.handle()}>Hiii {name}</h1>
        <form>
          <input onChange={(event) => this.handleInput(event)} type="text" value={this.state.inputValue}/>
        </form>
        <Home countChange={(count) => this.handleCount(count)}/>
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Navbar",
      count: 0
    }
  }

  componentDidMount() {

    console.log("componentDidMount 3")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate 3")

  }

  componentWillUnmount() {
    console.log("componentWillUnmount 3")
  }

  handle() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (

    <h2 onClick={() => this.handle()}>{this.state.title} - {this.props.count}</h2>
    )
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [], // can use object for optimization
      data: [
        {name: "Nokia", price: "34,345"},
        {name: "Nokia 6", price: "44,345"},
        {name: "Samsung", price: "30,345"},
        {name: "Apple", price: "84,345"},
        {name: "Apple x1", price: "94,345"},
        {name: "One Plus", price: "34,345"},
      ]
    } 
  }

  addToCart(item) {
    var cartData = [...this.state.cart];
    cartData.push(item);
    console.log("addToCart", item);
    this.setState({
      cart: cartData
    })
    var count = 0;
      cartData.forEach(item => {
        if(item) count++;
      })
    this.props.countChange(count);
  }

  removeCart(item) {
    var cartData = [...this.state.cart];
    if(cartData.indexOf(item) > -1) {
      delete cartData[cartData.indexOf(item)]
      this.setState({
        cart: cartData
      })
      var count = 0;
      cartData.forEach(item => {
        if(item) count++;
      })
      this.props.countChange(count);
    }
    console.log("removeCart");
  }

  render () {
    return (
      <Row>
          {this.state.data.map(item => {
            return (
              <Col sm={4} key={item.name}>
                <Card 
                  cart={this.state.cart} 
                  data={item} 
                  addToCart={(item) => this.addToCart(item)} 
                  removeCart={(item) => this.removeCart(item)}
                />
              </Col>
            )
          })}
      </Row>
    )
  }
}

function Card(props) {
  return (
    <div className="card">
      <h3>{props.data.name}</h3> 
      <span>{props.data.price}</span>
      {props.cart.includes(props.data.name)
        ? <button onClick={() => props.removeCart(props.data.name)}>Remove to cart</button>
        : <button onClick={() => props.addToCart(props.data.name)}>Add to cart</button>
      }
    </div>
  )
}

export default App;