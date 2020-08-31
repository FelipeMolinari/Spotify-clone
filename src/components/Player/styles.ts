import styled, { css } from 'styled-components';
import { FiVolume2 } from 'react-icons/fi';
import { CgPlayButtonO } from 'react-icons/cg';
import { IoIosShuffle, IoIosRepeat } from 'react-icons/io';
import { AiOutlineFastBackward, AiFillFastForward } from 'react-icons/ai';
import { expressionStatement } from '@babel/types';

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 12px;
`;

export const CurrentMusic = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
  }
  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 13px;
    color: #f1f1f1;
  }
  small {
    font-size: 11px;
    color: #b3b3b3;
    margin-top: 5px;
  }
`;
export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  margin-right: 20px;
`;

export const VolumeIcon = styled(FiVolume2)`
  margin-right: 5px;
  color: #b3b3b3;
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const Play = styled.button`
  background: transparent;
  border: 0;
  margin: 0px 12px;
`;
const smallIcons = css`
  color: #b3b3b3;
  margin: 0px 12px;
  width: 16px;
  height: 16px;
`;

export const ShuffleIcon = styled(IoIosShuffle)`
  ${smallIcons}
`;
export const BackwardIcon = styled(AiOutlineFastBackward)`
  ${smallIcons}
`;
export const ForwardIcon = styled(AiFillFastForward)`
  ${smallIcons}
`;
export const RepeatIcon = styled(IoIosRepeat)`
  ${smallIcons}
`;

export const TimeProgress = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`;

export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;
`;
