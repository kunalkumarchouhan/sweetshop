import styled from 'styled-components';
import { blue as color, red } from '../../styled/colors';
import { breakPoints } from '../../styled/variables';

export const Container = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 400px;
    margin-left: 50px;
  }

  & > h2 {
    color: #fff;
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 0 0 10px 0;
  padding: 8px;
  border: 2px solid ${color[500]};
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 0 0 10px 0;
  padding: 8px;
  border: 2px solid ${color[500]};
  resize: none;
`;

export const Button = styled.button`
  background-color: ${({disabled}) => disabled ? color[500] : color[700]};
  color: #fff;
  outline: none;
  border: none;
  display: inline-block;
  width: ${({ block }) => block ? '100%' : 'auto' };
  padding: 10px 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease;
  margin: 0 auto 10px auto;

  &:hover {
    background-color: ${({disabled}) => !disabled && color[900]};
    box-shadow: ${({disabled}) => !disabled && '0 2px 4px #555'};
  }
`;

export const ErrorMsg = styled.small`
  align-self: flex-end;
  color: ${red[500]};
`;
