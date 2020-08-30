import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';

interface NavProps {
  main?: boolean;
}
export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    padding: 25px;
  }
`;
export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;

  padding: 15px 25px;
  &:hover {
    color: #f1f1ff;
  }
  transition: color 0.3s;
`;

export const AddIcon = styled(IoIosAddCircleOutline)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const Nav = styled.ul<NavProps>`
  list-style: none;
  margin-top: 25px;
  &:first-child {
    margin-top: 0;
  }
  li a {
    color: inherit;
    text-decoration: none;
    font-size: 13px;
    line-height: 32px;
    font-weight: ${(props) => (props.main ? 'bold' : 'normal')};
    &:hover {
      color: #f1f1f1;
      transition: color 0.3s;
    }
  }
  li span {
    font-size: 11px;
    line-height: 22px;
    text-transform: uppercase;
    letter-spacing: 1.11px;
    font-weight: 300;
  }
`;
