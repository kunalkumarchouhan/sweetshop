import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fonts } from '../../styled/variables';
import { pink, red, blue } from '../../styled/colors';

export const HomePage = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-family: ${fonts[3]};
  color: #fff;
  background: -webkit-linear-gradient(${red[500]}, ${pink[500]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    position: relative;
    content: "";
    display: block;
    width: 0%;
    height: 3.5px;
    border-radius: 4px;
    background-color: ${red[500]};
    background: linear-gradient(60deg, ${red[500]}, ${pink[500]});
    animation: expand 2s ease forwards;
    animation-delay: 2s;
  }

  @keyframes expand {
    to {
      width: 100%;
    }
  }
`;

export const OrderButton = styled(Link)`
  outline: none;
  border: none;
  padding: 20px 40px;
  margin: 25px auto;
  background-color: ${blue[300]};
  background: linear-gradient(60deg, ${red[500]}, ${pink[500]});
  color: #fff;
  font-family: ${fonts[2]};
  transition: all 0.5s ease;

  &:hover {
    border-radius: 25px;
  }
`;
