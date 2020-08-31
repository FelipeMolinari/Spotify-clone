import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  flex: 1;

  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 48px;
  color: #f1f1f1;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const PlayList = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;
  img {
    height: 250px;
    margin-top: 10px;
    transition: opacity 0.4s;
  }
  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #f1f1f1;
    text-decoration: none;
  }
  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
  &:hover {
    img {
      opacity: 0.5;
    }
  }
  &:first-child {
    margin: 0;
  }
`;