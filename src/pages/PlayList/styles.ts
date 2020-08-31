import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineClockCircle } from 'react-icons/ai';
export const Container = styled.div`
  margin-top: 30px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 220px;
    height: 220px;
  }
  div {
    margin-left: 20px;
    span {
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: 300;
      color: #f1f1f1;
    }
    h1 {
      margin-top: 10px;
      font-size: 48px;
      color: #f1f1f1;
    }
    p {
      margin-top: 0px;
      color: #b3b3b3;
      font-size: 11px;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }
    button {
      background: #1db858;
      height: 32px;
      border-radius: 16px;
      color: #f1f1f1;
      line-height: 0 35px;
      padding: 0 35px;
      border: 0;
      margin-top: 10px;
      font-size: 12px;
      letter-spacing: 1.11px;
      cursor: pointer;
      transition: opacity 0.4s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;
  thead th {
    font-size: 11px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;
    &:last-child {
      text-align: right;
    }
  }
  tbody td {
    border-top: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;

    &:first-child {
      width: 80px;
      text-align: right;
    }
    &:last-child {
      text-align: right;
    }
  }

  tbody tr:hover td {
    background: #282828;
  }
`;

export const ClockIcon = styled(AiOutlineClockCircle)``;

export const PlusIcon = styled(AiOutlinePlus)``;