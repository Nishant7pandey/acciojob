import React from "react";
import star from "../UI/logo/star.svg";
import "./Home.css";
import{ useDispatch} from 'react-redux';
import {inNum} from '../../action/index';
import Container from './Container.js';

const Home = () => {
//   const counter =useSelector(state => state.changeNumber);
//   console.log(counter);
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState([]);
  const userProduct = [];
  const [infiniteLoop, setInfiniteLoop] = React.useState(false);


  //GET PRODUCT
  if (!infiniteLoop) {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        for (const items in data) {
          // setProduct([...product,data[items]]);
          userProduct.push(data[items]);
        }
        setProduct(userProduct);
      });
    setInfiniteLoop(true);
  }
  return (
    <div className="home">
      <Container/>
      <div className="products-container">
        <h3>Products</h3>
        <div className="Product-row">
          {product.map((item) => (
            <div className="product-card" key={item.id}>
              <img
                src={item.productImage}
                alt={item.productName}
                width="366px"
                height="307px"
              />
              <div className="product-detail">
                <p className="product-name">{item.productName}</p>
                <div className="rating-price">
                  <div className="product-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <div className="price">
                    <p className="product-oldPrice">{item.oldPrice}/-</p>
                    <p className="product-newPrice">{item.newPrice}/-</p>
                  </div>
                </div>
              </div>
              <button className="cart-button" onClick={() => dispatch(inNum())} >
                <h3>ADD TO CART</h3>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
