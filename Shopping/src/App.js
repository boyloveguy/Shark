import React from 'react';
import './App.css';
import ProductSize from './component/size';
import ProductShow from './component/show';
import ProductCart from './component/cart';
import ProductPill from './component/pill';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container" id="container">
          <ProductSize />
          <ProductShow />
          <ProductCart />
        </div>
        <ProductPill />
      </>
    )
  }
}

export default App;