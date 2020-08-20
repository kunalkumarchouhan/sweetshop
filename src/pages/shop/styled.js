import styled from 'styled-components';
import { fonts } from '../../styled/variables';
import { blue as color } from '../../styled/colors';

export const Catelogue = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const CatelogueItem = styled.div`
  width: 100%;
  max-width: 275px;
  margin: 10px 10px;
  padding: 10px;
  box-shadow: 2px 2px 4px 0px #555;
  background-color: #f5f5f5;
`;

export const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const ItemName = styled.p`
  position: absolute;
  margin: 0;
  padding: 10px 0;
  bottom: 0;
  width: 100%;
  font-size: 1.1rem;
  background-color: rgba(40, 40, 40, 0.8);
  color: #fff;
  font-family: ${fonts[3]};
`;

export const Price = styled.p`
  font-size: 0.9rem;
  font-family: ${fonts[2]};
  font-weight: bold;
  text-align: center;
  color: ${color[900]};
`;

export const AddToCart = styled.button`
  background-color: ${color[700]};
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

  &:hover {
    background-color: ${color[900]};
    box-shadow: 0 2px 4px #555;
  }
`;


