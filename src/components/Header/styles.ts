import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 6px;
  background: #f1f1f1;
  input {
    border: 0;
    text-decoration: none;
    width: 100%;
    background: transparent;
    color: #181818;
    font-weight: 400;
  }
`;
export const SearchIcon = styled(IoIosSearch)`
  fill: #181818;
  margin-right: 6px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  color: #f1f1f1;
  font-size: 13px;
  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
