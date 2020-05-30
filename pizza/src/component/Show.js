import React from 'react';
import LiteProduct from './LiteProduct.js';
import LiteOder from './LiteOder.js';

class Show extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      totalCount: 0,
      listOrder: [],
      products: [
        {
          id: 1,
          name: "Đồng Hồ",
          img: "/Images/img1.jpg",
          price: 6.25,
          count: 0
        },
        {
          id: 2,
          name: "Hoa Hướng Dương",
          img: "/Images/img2.jpg",
          price: 0.5,
          count: 0
        },
        {
          id: 3,
          name: "Thương Thương",
          img: "/Images/img3.jpg",
          price: 2000.5,
          count: 0
        },
        {
          id: 4,
          name: "Coffee Canpochinal",
          img: "/Images/img4.jpg",
          price: 1,
          count: 0
        },
        {
          id: 5,
          name: "Nhii Dung",
          img: "/Images/img5.jpg",
          price: 99999,
          count: 0
        },
        {
          id: 6,
          name: "I Love You",
          img: "/Images/img6.jpg",
          price: 9999,
          count: 0
        },
        {
          id: 7,
          name: "Logo Coffee",
          img: "/Images/img7.jpg",
          price: 2.5,
          count: 0
        }
      ]
    }
  };

  onClickNext = (id_item)=>{
    var {listOrder, products} = this.state;
    var startPrice =  products.filter(product => product.id===id_item);
    var {id,price, count} = startPrice[0]
    if(id_item === id){
      this.setState({
        products: products.map(value=>{
          if(id === value.id){
            return {...value, count: value.count<10?value.count+1:value.count};
          }else{
            return value;
          }
        }),
        totalCount: count < 10 ? this.state.totalCount + price : this.state.totalCount,
        listOrder: [...listOrder,startPrice[0].id,startPrice[0]]
      })
    }
  }

  onClickPrev = (id_item)=>{
    var {products, listOrder} = this.state;
    var indexItem = listOrder.lastIndexOf(id_item)
    var arrProdrct = [...this.state.listOrder]
    if(indexItem !== -1){
      arrProdrct.splice(indexItem,2)
    }
    var startPrice =  products.filter(product => product.id===id_item);
    var {id, price, count} = startPrice[0]
    if(id_item === id){
      this.setState({
        products: products.map(value=>{
          if(id === value.id){
            return {...value, count: value.count>0?value.count-1:value.count};
          }else{
            return value;
          }
        }),
        totalCount: count > 0 ? this.state.totalCount - price : this.state.totalCount,
        listOrder: arrProdrct
      })
    }
  }

  resetAll = ()=>{
    this.setState({
      totalCount: 0,
      listOrder: [],
      products: this.state.products.map(value=>{
        return {...value, count: 0};
        })
      })
  }

  render(){
    var productOrder = this.state.listOrder.map((value, index)=>{
      return typeof value === 'object'? <LiteOder key={index} product={value}/>:false
    });
    return(
       <div className="container">
          <div className="block_order">
            <h2>Convenience Store</h2>
            <h1>Babby Shark</h1>
            <div className="list_product_order">
              {productOrder}
            </div>
          </div>
          <LiteProduct resetAll={this.resetAll} products={this.state.products} total={this.state.totalCount} onClickNext={this.onClickNext} onClickPrev={this.onClickPrev}/>
       </div>
    )
  }
}

export default Show;