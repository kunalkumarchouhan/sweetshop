import React from 'react';
import { Table, DeleteButton } from './styled';
import {deliveryCharge, minAmount} from '../../pages/shop/items.json';

const CartTable = ({ cart, remove }) => {
  const total = cart
                .map(({pricePerUnit, quantity}) => pricePerUnit * quantity)
                .reduce((a,b) => a+b);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map(({name, unit, quantity, pricePerUnit}, idx) => (
            <tr key={idx}>
              <td>{idx+1}</td>
              <td>{name}</td>
              <td>{quantity} {unit}</td>
              <td>Rs. {pricePerUnit}/{unit}</td>
              <td>Rs. {pricePerUnit * quantity}/-</td>
              <td>
                <DeleteButton type="button" onClick={e => remove(idx)}>
                  Remove
                </DeleteButton>
              </td>
            </tr>
          ))
        }
        <tr>
          <td colSpan="4">Delivery Charge</td>
          <td colSpan="2">
            Rs. {
              total < minAmount ? deliveryCharge : 0
            }
          </td>
        </tr>
        <tr>
          <td colSpan="4">Total Amount</td>
          <td colSpan="2">
            Rs. {
              total + (total < minAmount ? deliveryCharge : 0)
            } Only
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CartTable;
