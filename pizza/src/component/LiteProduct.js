import React from 'react';
import Item from './Item.js';

class LiteProduct extends React.Component {

  render() {
    var itemProduct = this.props.products.map((value, index)=>{
      return <Item key={index} product={value} onClickNext={this.props.onClickNext} onClickPrev={this.props.onClickPrev}/>
    });
    return (
      <div className="block_Product">
        <div className="title_product">

          
        </div>
        <h2 className="choose_h3">Please select your product</h2>
        {itemProduct}
        <div className="block_total">
          <p>Total</p>
          <p>{this.props.total}$</p>
        </div>
        <div className="checkout">
          <button>Checkout</button>
          <button className="check_reset" onClick={this.props.resetAll}>Reset Product</button>
        </div>
      </div>
    )
  }
}

export default LiteProduct;