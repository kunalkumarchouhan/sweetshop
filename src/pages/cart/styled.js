import styled from 'styled-components';
import { breakPoints, fonts } from '../../styled/variables';
import { blue, red, pink } from '../../styled/colors';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 20px;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
  }
`;

export const TableContainer = styled.div`
  overflow: auto;
  width: 100%;
`;

export const MsgBox = styled.div`
  color: ${({ color }) => color };
  text-align: center;
  margin: 0 auto;
`;

export const Notification = styled.div`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 5px #333;
  padding: 20px 30px;
  background-color: ${({ color }) => color };
  z-index: 100;
  color: #fff;
  text-align: center;
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
  display: block;
  text-align: center;

  &:hover {
    border-radius: 25px;
  }
`;


