import React from 'react';

import {
  Container,
  CurrentMusic,
  Volume,
  VolumeIcon,
  Progress,
  Controls,
  ShuffleIcon,
  BackwardIcon,
  ForwardIcon,
  RepeatIcon,
  Play,
  TimeProgress,
  ProgressSlider
} from './styles';
import Slider from 'rc-slider';

import PauseIcon from '../../assets/images/pause.svg';
import PlayIcon from '../../assets/images/play.svg';

const Player: React.FC = () => {
  return (
    <Container>
      <CurrentMusic>
        <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"></img>
        <div>
          <span>Times like theses</span>
          <small>Foo Fighters</small>
        </div>
      </CurrentMusic>

      <Progress>
        <Controls>
          <ShuffleIcon></ShuffleIcon>
          <BackwardIcon></BackwardIcon>
          <Play>
            <img src={PlayIcon} alt="Play" />
          </Play>
          <ForwardIcon></ForwardIcon>
          <RepeatIcon></RepeatIcon>
        </Controls>
        <TimeProgress>
          <span>1:32</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ border: 0, cursor: 'default' }}
            />
          </ProgressSlider>
          <span>3:40</span>
        </TimeProgress>
      </Progress>
      <Volume>
        <VolumeIcon></VolumeIcon>
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#f1f1f1' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  );
};

export default Player;
