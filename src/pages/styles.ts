// styles.ts
import styled from 'styled-components';

interface ButtonProps {
  $left: number;
  color: string;
}

export const Button = styled.button<ButtonProps>`
  position: absolute;
  width: 153px;
  height: 83px;
  left: ${props => props.$left}px;
  top: 781px;
  background-color: ${props => props.color};
  font-family: 'JejuGothic', sans-serif;
  font-size: 48px;
  line-height: 52px;
  color: #000;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 76px;
    height: 41px;
    font-size: 24px;
    line-height: 26px;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 985px;
  height: 453px;
  left: 50%;
  transform: translateX(-50%);
  top: 286px;
  background-image: url('image.png');
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  width: 100%;
  max-width: 675px;
  height: 89px;
  left: 50%;
  transform: translateX(-50%);
  top: 129px;
  font-family: 'JejuGothic', sans-serif;
  font-size: 64px;
  line-height: 69px;
  color: #000;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 36px;
    height: 45px;
  }
`;
