import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                  {/* <Card 
                    cart={this.state.cart} 
                    data={item} 
                    addToCart={(item) => this.addToCart(item)} 
                    removeCart={(item) => this.removeCart(item)}
                  /> */}
                </Col>
              )
            })}
        </Row>
      )
    }
  }

  export default Home;