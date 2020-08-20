import styled from 'styled-components';
import { blue } from '../../styled/colors';

export const Table = styled.table`
  position: relative;
  overflow: scroll;
  padding: 0;
  margin: 0;
  width: 100%;

  & > thead {
    background-color: #000;
    color: #fff;
  }

  & > tbody {
    & > tr {
      &:nth-child(even) {
        background-color: ${blue[100]};
      }
      &:nth-child(odd) {
        background-color: ${blue[50]};
      }
    }
  }

  & tr {
    & > th,
    & > td {
      padding: 10px 5px;
      border: 0px;
      text-align: center;
    }
    & > td {
      color: ${blue[900]};
    }
  }
`;

export const DeleteButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  display: inline-block;
  margin: 0 auto;
  padding: 0;
  font-size: 0.8rem;
  cursor: pointer;
  color: ${blue[700]};
  transition: all 0.5s ease;

  &:hover {
    color: ${blue[900]};
  }
`;
