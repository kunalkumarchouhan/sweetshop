import React, { useState, useEffect } from 'react';
import { Section, TableContainer, Notification, MsgBox, OrderButton } from './styled';
import Table from '../../components/table';
import CheckoutForm from '../../components/checkout-form';
import { red, blue } from '../../styled/colors.js';
import { pin, minAmountOutside } from '../shop/items.json';

const Cart = props => {
  const [ cart, handleCart ] = useState([]);
  const [ notification, handleNotification ] = useState("");
  const [ type, handleType ] = useState("");

  useEffect(() => {
    handleCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  const deleteItem = index => {
    let cartCopy = JSON.parse(localStorage.getItem('cart'));
    cartCopy = [...cartCopy.slice(0,index), ...cartCopy.slice(index+1)];
    localStorage.setItem('cart', JSON.stringify(cartCopy));
    handleCart(cartCopy);
  }

  const response = (msg, type) => {
    handleNotification(msg);
    handleType(type);
  }

  useEffect (() => {
    if (notification) {
      let timer = setTimeout(() => {
        handleNotification("");
        handleType("");
        clearTimeout(timer);
      }, 5000);
    }
  }, [notification, type]);

  return (
    <Section>
      {
        notification &&
        <Notification color={type === 'success' ? blue[500]: red[500]}>{notification}</Notification>
      }
      {
        cart.length === 0
          ? <div style={{color: '#fff'}}>
              <h1>Cart is empty</h1>
              <p>Add items to cart from Shop</p>
              <OrderButton to="/shop">Go to Shop</OrderButton>
            </div>
          : <>
              <TableContainer>
                <MsgBox color={blue[200]}>
                  <p>
                    Due to current pandemic situation, delivery can not be made to the address outside <em><b>PIN: {pin}</b></em>,
                    if the order amount is less than <em><b>Rs. {minAmountOutside}</b></em>
                  </p>
                </MsgBox>
                <Table cart={cart} remove={deleteItem}/>
              </TableContainer>
              <CheckoutForm items={cart} response={response}/>
            </>
      }
    </Section>
  );
}

export default Cart;
