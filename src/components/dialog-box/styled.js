import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fonts, breakPoints } from '../../styled/variables';
import { blue as color, red, grey, blue } from '../../styled/colors';

export const Dialog = styled.div`
  position: fixed;
  background-color: #fff;
  padding: 20px;
  margin: 0px;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: 1px solid ${grey[500]};
  z-index: 100;
  overflow: auto;

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${breakPoints.tablet}) {
    height: auto;
    width: 600px;
    left: auto;
    top: auto;
    box-shadow: 4px 4px 16px 0px #555;
  }
`;

export const Box = styled.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: ${breakPoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  color: ${color[900]};
  background: transparent;
  font-size: 2rem;
  position: absolute;
  top: -20px;
  right: -10px;
  padding: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${red[500]};
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    top: -40px;
    position: fixed;
    top: 50%;
    left: 0;
    width: 40px;
    height: 40px;
    padding: 5px;
    text-align: center;
    line-height: 0;
    background-color: ${red[700]};
    color: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 40%;
  height: auto;
  margin: 0;
  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  max-width: 320px;
  color: ${color[700]};
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: ${color[900]};
  font-family: ${fonts[3]};
  text-align: center;
`;

export const ItemPrice = styled(ItemName)`
  font-size: 1rem;
  margin: 10px 0;
`;

export const CartButton = styled.button`
  background-color: ${({disabled}) => disabled ? color[500] : color[700]};
  color: #fff;
  outline: none;
  border: none;
  display: inline-block;
  width: ${({ block }) => block ? '100%' : 'auto' };
  padding: 15px 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-family: ${fonts[2]};
  transition: all 0.5s ease;
  margin: 10px 0px 0px 0px;

  &:hover {
    background-color: ${({disabled}) => !disabled && color[900]};
    box-shadow: ${({disabled}) => !disabled && '0 2px 4px #555'};
  }
`;

export const Select = styled.select`
  outline: none;
  border: 2px solid ${color[900]};
  width: 260px;
  margin-bottom: 10px;
  padding: 10px 5px;
  background-color: #fff;
`;

export const Input = styled.input`
  outline: none;
  border: 2px solid ${color[900]};
  width: 260px;
  margin-bottom: 10px;
  padding: 10px 15px;
  background-color: #fff;
`;

export const Small = styled.small`
  color: ${({error}) => error ? red[600] : color[900]};
  text-align: right;
`;

export const Anchor = styled(Link)`
  background-color: ${color[700]};
  color: #fff;
  outline: none;
  border: none;
  display: inline-block;
  text-align: center;
  width: ${({ block }) => block ? '100%' : 'auto' };
  padding: 15px 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-family: ${fonts[2]};
  transition: all 0.5s ease;
  margin: auto 0px 0px 0px;

  &:hover {
    background-color: ${color[900]};
    box-shadow: 0 2px 4px #555;
  }
`;

export const Alert = styled.div`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 1;
  padding: 10px 20px;
  background-color: ${blue[500]};
  color: #fff;
  box-shadow: 0 0 10px 0 #555;
`;
