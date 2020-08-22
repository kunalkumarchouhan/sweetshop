import React, { useState } from 'react';
import { Container, Input, TextArea, Button, ErrorMsg } from './styled';
import axios from 'axios';
import { url } from '../../app.json';

const CheckoutForm = ({ items, response }) => {
  const [name, handleName] = useState("");
  const [phone, handlePhone] = useState("");
  const [address, handleAddress] = useState("");
  const [error, handleError] = useState({});

  const validate = id => {
    const errorCopy = {...error};
    switch (id) {
      case "name":
        if (!(/^[A-Za-z]([ ]?[A-Za-z]+)+$/.test(name))) {
          errorCopy.name = "Only letters and spaces allowed.";
        }
        else {
          delete errorCopy.name;
        }
        break;
      case "phone":
        if (!(/^[1-9][0-9]{9}$/.test(phone))) {
          errorCopy.phone = "Phone number is not valid.";
        }
        else {
          delete errorCopy.phone;
        }
        break;
      case "address":
        if (!(/^[\w\d ]+$/.test(address))) {
          errorCopy.address = "Address is not valid.";
        }
        else {
          delete errorCopy.address;
        }
        break;
      default:
    }
    handleError(errorCopy);
  }

  const placeOrder = e => {
    if (name && phone && address && (Object.keys(error).length === 0)) {
      axios.post(`${url}/order/new`, { name, phone, address, items })
        .then(res => {
          if (res.status === 200) {
            localStorage.clear();
            response(`Order placed successfully. Order ID: ${res.data.order._id}, will delivered to you soon. Thank you!! `, "success");
          }
        })
        .catch(error => {
          response(`Network Error`, 'error');
        });
    }
  }

  return (
    <Container>
      <h2>Checkout</h2>
      { error.name && <ErrorMsg>{error.name}</ErrorMsg> }
      <Input type="text"
        id="name"
        placeholder="Name"
        value={name}
        onBlur={e => validate(e.target.id)}
        onChange={e => handleName(e.target.value)}
      />
      { error.phone && <ErrorMsg>{error.phone}</ErrorMsg> }
      <Input type="tel"
        id="phone"
        placeholder="Mobile Number"
        value={phone}
        onBlur={e => validate(e.target.id)}
        onChange={e => handlePhone(e.target.value)}
      />
      { error.address && <ErrorMsg>{error.address}</ErrorMsg> }
      <TextArea id="address"
        placeholder="Address"
        value={address}
        onBlur={e => validate(e.target.id)}
        onChange={e => handleAddress(e.target.value)}
      >
      </TextArea>
      <Button onClick={placeOrder} block>
        Place Order
      </Button>
    </Container>
  );
}

export default CheckoutForm;
