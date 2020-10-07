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