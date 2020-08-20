import React from 'react';

import { title } from '../../app.json';
import { HomePage, Title, OrderButton } from './styled';

const Home = props => {
  return (
    <HomePage>
      <Title>{ title }</Title>
      <OrderButton to="/shop">Order Now</OrderButton>
    </HomePage>
  );
}

export default Home;
