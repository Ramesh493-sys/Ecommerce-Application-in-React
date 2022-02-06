import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [totalAmount, settotalAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + cartItem.price;
    });
    settotalAmount(temp);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const deletefromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  return (
    <Layout>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Item</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.imageURL} height="80" width="80" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <FaTrash onClick={() => deletefromCart(item)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <h1 className="total-amount"> Total Amount = Rs/- {totalAmount}</h1>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button>PLACE ORDER</button>
      </div>
    </Layout>
  );
}

export default CartPage;
